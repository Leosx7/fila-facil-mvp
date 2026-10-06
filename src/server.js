import 'dotenv/config';
import { app } from './app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Fila Fácil API disponível em http://localhost:${port}`);
});
