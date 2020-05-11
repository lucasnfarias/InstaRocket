const multer = require('multer');
const path = require('path');

// Exportando a imagem quando dá um POST para a pasta uploads
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname); //nome original da imagem e formato
        }
    })
}