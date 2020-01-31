const order = require("./../../models/order");

const orderRoutes = {
  get: (req, res) => {
      const getOrder = order.getOrders()
      res.json(getOrder)
  },
  post: (req, res) => {
    
    const postOrder = order.createOrders(req);
    res.json(postOrder)
  },
  put: () => {},
  delete: () => {}
};

module.exports = orderRoutes;
