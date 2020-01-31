const conexion = require("./conexion");

const orderModel = {
  getOrders: (callback) => {
    if(conexion){
        conexion.query('SELECT * FROM `order`', (err, row) => {
            if(err){
                throw err;
            }else{
                callback(null, row)
            }
        })
    }
},
  createOrders: async req => {
    const newOrder = {
      user_id: req.body.user_id,
      delivery_address: req.body.delivery_address,
      delivery_date: req.body.delivery_date,
      time_duration: req.body.time_duration
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
