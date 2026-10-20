import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validarCriacaoSolicitacao,
  validarAtualizacaoSolicitacao,
} from '../src/validators/solicitacao.validator.js';

test('RF-01: status inicial deve ser aguardando mesmo se o cliente tentar enviar outro status', () => {
  const resultado = validarCriacaoSolicitacao({
    nome_cliente: 'Leonardo Alencar',
    servico: 'Atendimento geral',
    prioridade: 'normal',
    status: 'concluido',
  });

  assert.equal(resultado.valido, true);
  assert.equal(resultado.dados.status, 'aguardando');
});

test('RF-02: campos obrigatórios vazios devem ser rejeitados', () => {
  const resultado = validarCriacaoSolicitacao({
    nome_cliente: '   ',
    servico: 'Atendimento geral',
    prioridade: 'normal',
  });

  assert.equal(resultado.valido, false);
  assert.equal(resultado.erro, 'Dados inválidos.');
});

test('PUT: atualização aceita apenas status previsto no contrato', () => {
  const resultado = validarAtualizacaoSolicitacao({
    nome_cliente: 'Leonardo Alencar',
    servico: 'Atendimento geral',
    prioridade: 'prioritaria',
    status: 'em_atendimento',
  });

  assert.equal(resultado.valido, true);
  assert.equal(resultado.dados.status, 'em_atendimento');
});

test('PUT: status inválido é rejeitado', () => {
  const resultado = validarAtualizacaoSolicitacao({
    nome_cliente: 'Leonardo Alencar',
    servico: 'Atendimento geral',
    prioridade: 'normal',
    status: 'cancelado',
  });

  assert.equal(resultado.valido, false);
});
