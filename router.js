const authController = require('./controladores/auth');
const cedulaController = require('./controladores/cedula');

const authMiddleware = require('./middlewares/auth');

module.exports.set = (app) => {



    //app.options('', cors())

    app.post('/login', authController.login);
    app.post('/register', authController.register);

    //next endpoints require auth
    app.get('/cedula/:cedula', authMiddleware.checkAuth, cedulaController.getcedula);

}