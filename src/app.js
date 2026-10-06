import express from 'express';
import cors from 'cors';
import { solicitacoesRouter } from './routes/solicitacoes.routes.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/v1/solicitacoes', solicitacoesRouter);
