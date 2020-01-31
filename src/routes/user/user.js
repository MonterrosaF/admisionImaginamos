const user = require("./../../models/user");

const userRoutes = {
  get: (req, res) => {
    const getUsers = user.getUsers();
    res.json(getUsers);
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
