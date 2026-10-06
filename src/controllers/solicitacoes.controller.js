import { solicitacoesRepository } from '../repositories/solicitacoes.repository.js';

const PRIORIDADES = ['normal', 'prioritaria'];
const STATUS = ['aguardando', 'em_atendimento', 'concluido'];

function payloadValido(body) {
  const nome = body?.nome_cliente?.trim();
  const servico = body?.servico?.trim();
  const prioridade = body?.prioridade;
  const status = body?.status ?? 'aguardando';

  if (!nome || nome.length < 2 || nome.length > 80) return null;
  if (!servico || servico.length < 2 || servico.length > 80) return null;
  if (!PRIORIDADES.includes(prioridade)) return null;
  if (!STATUS.includes(status)) return null;

  return { nome_cliente: nome, servico, prioridade, status };
}

export const solicitacoesController = {
  async listar(req, res) {
    try {
      const dados = await solicitacoesRepository.findAll();
      return res.status(200).json(dados);
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },

  async obterPorId(req, res) {
    try {
      const dado = await solicitacoesRepository.findById(req.params.id);
      if (!dado) return res.status(404).json({ erro: 'Solicitação não encontrada.' });
      return res.status(200).json(dado);
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },

  async criar(req, res) {
    const payload = payloadValido(req.body);
    if (!payload) {
      return res.status(400).json({ erro: 'Dados inválidos.' });
    }

    try {
      const nova = await solicitacoesRepository.create(payload);
      res.location(`/api/v1/solicitacoes/${nova.id}`);
      return res.status(201).json(nova);
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },

  async atualizar(req, res) {
    const payload = payloadValido(req.body);
    if (!payload) {
      return res.status(400).json({ erro: 'Dados inválidos.' });
    }

    try {
      const existente = await solicitacoesRepository.findById(req.params.id);
      if (!existente) return res.status(404).json({ erro: 'Solicitação não encontrada.' });

      const atualizado = await solicitacoesRepository.update(req.params.id, payload);
      return res.status(200).json(atualizado);
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },

  async remover(req, res) {
    try {
      const existente = await solicitacoesRepository.findById(req.params.id);
      if (!existente) return res.status(404).json({ erro: 'Solicitação não encontrada.' });

      await solicitacoesRepository.remove(req.params.id);
      return res.status(204).send();
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },
};
