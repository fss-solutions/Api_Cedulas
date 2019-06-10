module.exports = {
        port: 8000,
        dbConnectionString: "postgres://postgres:1234@localhost:5432/Base_datos",
        operatorsAliases: false,
        saltRounds: 2,
        jwtSecret: 'FSSolutions',
        tokenExpireTime: '20000000000000000'
    }
    //No salvar este archivo es "peligroso"