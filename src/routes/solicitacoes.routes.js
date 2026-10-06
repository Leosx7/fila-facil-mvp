import { Router } from 'express';
import { solicitacoesController } from '../controllers/solicitacoes.controller.js';

export const solicitacoesRouter = Router();

solicitacoesRouter.get('/', solicitacoesController.listar);
solicitacoesRouter.get('/:id', solicitacoesController.obterPorId);
solicitacoesRouter.post('/', solicitacoesController.criar);
solicitacoesRouter.put('/:id', solicitacoesController.atualizar);
solicitacoesRouter.delete('/:id', solicitacoesController.remover);
