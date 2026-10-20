const PRIORIDADES = ['normal', 'prioritaria'];
const STATUS = ['aguardando', 'em_atendimento', 'concluido'];

function camposBase(body) {
  const nome_cliente = body?.nome_cliente?.trim();
  const servico = body?.servico?.trim();
  const prioridade = body?.prioridade;

  if (!nome_cliente || nome_cliente.length < 2 || nome_cliente.length > 80) return null;
  if (!servico || servico.length < 2 || servico.length > 80) return null;
  if (!PRIORIDADES.includes(prioridade)) return null;

  return { nome_cliente, servico, prioridade };
}

export function validarCriacaoSolicitacao(body) {
  const base = camposBase(body);
  if (!base) return { valido: false, erro: 'Dados inválidos.' };

  return {
    valido: true,
    dados: { ...base, status: 'aguardando' },
  };
}

export function validarAtualizacaoSolicitacao(body) {
  const base = camposBase(body);
  const status = body?.status;

  if (!base || !STATUS.includes(status)) {
    return { valido: false, erro: 'Dados inválidos.' };
  }

  return {
    valido: true,
    dados: { ...base, status },
  };
}
