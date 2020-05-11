// PONTO DE ENTRADA
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Lidar com Rotas, Parâmetros e Respostas dos Clientes
const app = express();

// Suporte ao protocolo HTTP
const server = require('http').Server(app);

// Suporte ao protocolo de Web Socket, recebe e envia as requisições para todos os usuários conectados REAL-TIME
const io = require('socket.io')(server);

// Conectando o BD com a Connection String
mongoose.connect(
  'mongodb+srv://<username>:<password>@cluster0-igrf8.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);

app.use((req, res, next) => {
  req.io = io;

  // permite que a essa requisição seja executada e que todas outras também sejam
  next();
});

// Permite que todas as urls de diferentes ips e servidores possão acessar a Back-End - PERMITE ACESSO DO REACT
app.use(cors());

// MOSTRA AS IMAGENS QUE FORAM UPADAS
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized')),
);

// Acessando as Rotas
app.use(require('./routes'));

// Setando uma porta de entrada
server.listen(3333);
