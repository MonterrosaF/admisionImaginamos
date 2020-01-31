const conexion = require("./conexion");

const userModel = {
  getUsers: (callback) => {
    if(conexion){
      conexion.query('SELECT * FROM `users` WHERE rol_id = 1', (err, row) => {
          if(err){
              throw err;
          }else{
              callback(null, row)
          }
      })
  }
  },
  createUsers: async req => {
    const newUser = {
      rol_id: req.body.rol_id,
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile
    };

    if (conexion) {
      const response = conexion.query("INSERT INTO `users` set ? ", [
        newUser
      ]);
      return response;
    }
  },
  updateUsers: async req => {
    const User = {
      rol_id: req.body.rol_id,
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile
    };
    const user_id = req.body.id

    if (conexion) {
      const response =  conexion.query("UPDATE `users` set ?  WHERE id = ? ", [
        User, user_id]);
      return response;
    }
  },
  deleteUsers: async req => {
    const User = {
      id: req.body.id
    };

    if (conexion) {
      const response =  conexion.query("DELETE from `users` where ? ", [
        User
      ]);
      return response;
    }
  }
};

module.exports = userModel;
