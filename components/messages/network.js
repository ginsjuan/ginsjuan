
const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();

router.get('/', (req, res) => {

   controller.getMessages()
   .then((messageList) => {
        response.sucess(req, res, messageList, 200);
   })
   .catch((error) => {
        response.error(req, res, nessageList, 500);
   })
})

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.sucess(req, res, 'creado correctamente', 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        })

})

module.exports = router;