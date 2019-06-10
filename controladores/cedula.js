const cedulaService = require('../servicios/cedula');

function getcedula(req, res) {
    cedulaService.getAll(req.params.cedula)
        .then(data => res.send(data));
};

function addcedula(req, res) {
    cedulaService.addCedula({
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            nombre_juri: req.body.nombre_juri,
            apellidos: req.body.apellidos,
            clasificacion: req.body.clasificacion
        })
        .then(data => res.send(data));
};

function updatecedula(req, res) {
    cedulaService.updateCedula({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        nombre_juri: req.body.nombre_juri,
        apellidos: req.body.apellidos,
        clasificacion: req.body.clasificacion
        })
        .then(data2 => res.send(data2));
};


function deletecedula(req, res) {
    res.send(cedulaService.deleteCedula({
        id: req.params.id
    }));
};


module.exports = {
    getcedula,
    addcedula,
    updatecedula,
    deletecedula,
}