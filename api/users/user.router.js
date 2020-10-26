const {
  createUser,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  login,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { addUserValidation } = require("../../validation/users/user.validation");

router.get("/all", checkToken, getUsers);
router.post("/create", checkToken, addUserValidation, createUser);
router.get("/user/:id", checkToken, getUserByUserId);
router.patch("/update", checkToken, updateUser);
router.delete("/delete", checkToken, deleteUser);
router.post("/login", login);

module.exports = router;
