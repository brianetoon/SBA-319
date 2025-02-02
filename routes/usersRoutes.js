import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById
} from "../controllers/usersController.js"

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;