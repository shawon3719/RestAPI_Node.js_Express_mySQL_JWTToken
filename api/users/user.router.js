const {
  createUser,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();

router.post("/create", createUser);
router.get("/all", getUsers);
router.get("/user/:id", getUserByUserId);
router.patch("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
