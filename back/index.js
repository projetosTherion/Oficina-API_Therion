import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fake_data_baseJogos from './fake_data_baseJogos.json' assert { type: "json" };   
import fs from 'fs';

dotenv.config(); //Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 4000; //Usa a variável de ambiente PORT ou 3000 como padrão 
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000", process.env.CLIENT_URL || "*"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});
// Rotas para crud jogos
//TODO app.get('/jogos', ...);
//TODO app.post('/jogos', async (req, res...);
//TODO app.put('/jogos/:id', ...);
//TODO app.delete('/jogos/delete/:id', ...);
//inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}`);
});

