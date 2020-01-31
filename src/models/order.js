const conexion = require("./conexion");

const orderModel = {
  getOrders: async () => {
    if (conexion) {
      const response = await conexion.query("SELECT * FROM `order`");
      return response;
    }
  },
  createOrders: async (req) => {
    const newOrder = {
      user_id: req.body.user_id,
      delivery_address: req.body.delivery_address,
      delivery_date: req.body.delivery_date,
      time_duration: req.body.time_duration
    };

    if (conexion) {
      const response = await conexion.query("INSERT INTO `order` set ? ", [newOrder]);
      return response;
    }
  }
};

module.exports = orderModel;
