const Cedula = require('../modelos').Cedula;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const getAll = cedula => Cedula.findOne({ where: { cedula: { [Op.like]: '%' + cedula + '%' } } });
const addCedula = cedula => Cedula.create(cedula);
const updateCedula = cedula => Cedula.update(cedula, {
    where: {
        cedula: cedula.cedula
    }
});

const deleteCedula = cedula => {
    Cedula.findById(cedula.cedula).then((result) => {
        console.log(result);
        return Cedula.destroy({
                where: {
                    cedula: cedula.cedula
                }
            })
            .then((u) => {
                return result
            });

    });

}

module.exports = {
    getAll,
    addCedula,
    updateCedula,
    deleteCedula
};