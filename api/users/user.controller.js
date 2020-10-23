const {
  create,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
} = require("./user.service");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = {
  //Create User
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  //Get User info by Id
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  //Get all User info
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  //update user info
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      // if (!results) {
      //   return res.json({
      //     success: 0,
      //     message: "Failed to update user",
      //   });
      // }
      return res.json({
        success: 1,
        message: "User updated successfully",
      });
    });
  },
  //Delete User info by Id
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // if (!results) {
      //   return res.json({
      //     success: 0,
      //     message: "User has been deleted successfully",
      //   });
      // }
      return res.json({
        success: 1,
        message: "User has been deleted successfully",
      });
    });
  },
};
