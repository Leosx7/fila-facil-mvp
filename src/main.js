import './style.css';
import { cadastrarNoSupabase } from './services/inserirRegistro.js';

const form = document.querySelector('#form-solicitacao');
const mensagem = document.querySelector('#mensagem');
const botao = document.querySelector('#enviar');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  mensagem.textContent = '';
  botao.disabled = true;
  botao.textContent = 'Salvando...';

  const dados = {
    nome_cliente: document.querySelector('#nome').value,
    servico: document.querySelector('#servico').value,
    prioridade: document.querySelector('#prioridade').value,
  };

  const resultado = await cadastrarNoSupabase(dados);

  if (resultado.sucesso) {
    mensagem.className = 'mensagem sucesso';
    mensagem.textContent = `Solicitação registrada! Protocolo: ${resultado.dados.id} | Status: ${resultado.dados.status}`;
    form.reset();
  } else {
    mensagem.className = 'mensagem erro';
    mensagem.textContent = resultado.erro;
  }

  botao.disabled = false;
  botao.textContent = 'Entrar na fila';
});
