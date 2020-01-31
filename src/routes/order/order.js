const order = require("./../../models/order");

const orderRoutes = {
  get: (req, res) =>  {
    order.getOrders((err, data) => {
      res.json(data);
  })
  },
  post: (req, res) => {
    const postOrder = order.createOrders(req);
    res.json(postOrder);
  },
  put: (req, res) => {
    const updateOrder = order.updateOrders(req);
    res.json(updateOrder);
  },
  delete: (req, res) => {
    const deleteOrder = order.deleteOrders(req);
    res.json(deleteOrder);
  },
};

module.exports = orderRoutes;
