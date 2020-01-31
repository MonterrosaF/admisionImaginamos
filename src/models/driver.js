const conexion = require("./conexion");

const driverModel = {
  getDrivers: (callback) => {
    if(conexion){
      conexion.query('SELECT * FROM `users` WHERE rol_id = 2', (err, row) => {
          if(err){
              throw err;
          }else{
              callback(null, row)
          }
      })
  }
  },
};

module.exports = driverModel;
