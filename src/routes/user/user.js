const user = require("./../../models/user");

const userRoutes = {
  get: (req, res) => {
    user.getUsers((err, data) => {
      res.json(data);
  })
  },
  post: (req, res) => {
    const postUser = user.createUsers(req);
    res.json(postUser);
  },
  put: (req, res) => {
    const updateUser = user.updateUsers(req);
    res.json(updateUser);
  },
  delete: (req, res) => {
    const deleteUser = user.deleteUsers(req);
    res.json(deleteUser);
  },
};

module.exports = userRoutes;
