// TODO: Multer es usado para poder cargar archivos al servidor
const multer = require('multer');

// TODO: http://localhost:3000/storage
const storage = multer.diskStorage({
    destination:function(req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename:function(req, file, cb) {
        // TODO: mi-foto.jpg --> deben tener su formato

        const ext = file.originalname.split('.').pop(); //TODO: ['name', 'ext']
        // TODO: Esto es para generar nombre randos a los archivos
        const fileName = `file-${Date.now()}.${ext}`;
        cb(null, fileName)
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;