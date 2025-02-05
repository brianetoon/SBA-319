import express from "express";
import {
  createComment,
  deleteComment,
  getAllComments
} from "../controllers/commentsController.js"

const router = express.Router();

router.get("/", getAllComments);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;