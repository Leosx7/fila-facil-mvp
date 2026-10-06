import { supabase } from './supabaseClient.js';

export async function cadastrarNoSupabase(dadosFormulario) {
  try {
    const nome_cliente = dadosFormulario?.nome_cliente?.trim();
    const servico = dadosFormulario?.servico?.trim();
    const prioridade = dadosFormulario?.prioridade;

    if (!nome_cliente || nome_cliente.length < 2 || nome_cliente.length > 80) {
      return { sucesso: false, erro: 'Informe um nome entre 2 e 80 caracteres.' };
    }

    if (!servico || servico.length < 2 || servico.length > 80) {
      return { sucesso: false, erro: 'Informe um serviço entre 2 e 80 caracteres.' };
    }

    if (!['normal', 'prioritaria'].includes(prioridade)) {
      return { sucesso: false, erro: 'Prioridade inválida.' };
    }

    const { data, error } = await supabase
      .from('solicitacoes')
      .insert([{ nome_cliente, servico, prioridade, status: 'aguardando' }])
      .select()
      .single();

    if (error) {
      return { sucesso: false, erro: `Falha na persistência: ${error.message}` };
    }

    return { sucesso: true, dados: data };
  } catch (err) {
    return { sucesso: false, erro: `Não foi possível conectar ao Supabase: ${err.message}` };
  }
}
