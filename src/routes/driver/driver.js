const driver = require("./../../models/driver");

const driverRoutes = {
  get: (req, res) => {
    driver.getDrivers((err, data) => {
      res.json(data);
  })
  },
};

module.exports = driverRoutes;
