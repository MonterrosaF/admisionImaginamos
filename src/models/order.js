const conexion = require("./conexion");

const orderModel = {
  getOrders: (callback) => {
    if(conexion){
        conexion.query('SELECT id, user_id, delivery_address, delivery_date, FROM `order`', (err, row) => {
            if(err){
                throw err;
            }else{
                callback(null, row)
            }
        })
    }
},
  createOrders: async req => {
    // const driversData = await conexion.query("SELECT usuarios.id, usuarios.rol_id FROM `users` usuarios JOIN `order` orden ON usuarios.rol_id = orden.id")
    const driversData =  conexion.query("SELECT usuarios.id FROM `users` usuarios where usuarios.rol_id = 2 ORDER BY RAND() LIMIT 1")
    const newOrder = {
      user_id: req.body.user_id,
      delivery_address: req.body.delivery_address,
      delivery_date: req.body.delivery_date,
      time_duration: req.body.time_duration,
      driver: driversData
    };

    if (conexion) {
      const response = await conexion.query("INSERT INTO `order` set ? ", [
        newOrder
      ]);
      return response;
    }
  },
  updateOrders: async req => {
    const Order = {
      user_id: req.body.user_id,
      delivery_address: req.body.delivery_address,
      delivery_date: req.body.delivery_date,
      time_duration: req.body.time_duration
    };

    if (conexion) {
      const response = await conexion.query("UPDATE `order` set ? ", [
        Order
      ]);
      return response;
    }
  },
  deleteOrders: async req => {
    const Order = {
      id: req.body.id,
    };

    if (conexion) {
      const response = await conexion.query("DELETE from `order` where ? ", [
        Order
      ]);
      return response;
    }
  }
};

module.exports = orderModel;
