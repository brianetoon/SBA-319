import express from "express";
import { 
  createRecipe,
  deleteRecipe,
  getAllRecipes
 } from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.delete("/:id", deleteRecipe);

export default router;