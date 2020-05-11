const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

// express==backend geral, multer para acessar as infos em formato FORM, Uploadconfig para onde e como mandar o arquivo e PostController para métodos e funções necessários
const routes = new express.Router();
const upload = multer(uploadConfig);

// ROTAS
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
