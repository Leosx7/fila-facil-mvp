import { solicitacoesRepository } from '../repositories/solicitacoes.repository.js';
import {
  validarCriacaoSolicitacao,
  validarAtualizacaoSolicitacao,
} from '../validators/solicitacao.validator.js';

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
    const validacao = validarCriacaoSolicitacao(req.body);
    if (!validacao.valido) {
      return res.status(400).json({ erro: validacao.erro });
    }

    try {
      const nova = await solicitacoesRepository.create(validacao.dados);
      res.location(`/api/v1/solicitacoes/${nova.id}`);
      return res.status(201).json(nova);
    } catch {
      return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  },

  async atualizar(req, res) {
    const validacao = validarAtualizacaoSolicitacao(req.body);
    if (!validacao.valido) {
      return res.status(400).json({ erro: validacao.erro });
    }

    try {
      const existente = await solicitacoesRepository.findById(req.params.id);
      if (!existente) return res.status(404).json({ erro: 'Solicitação não encontrada.' });

      const atualizado = await solicitacoesRepository.update(req.params.id, validacao.dados);
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
