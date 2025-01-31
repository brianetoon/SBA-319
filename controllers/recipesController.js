import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
  console.log(`🚀 ${req.method} request for all recipes`);

  const recipes = await Recipe.find();
  res.status(200).json({ success: true, data: recipes });
}

export const createRecipe = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new recipe`);

  const newRecipe = new Recipe(req.body);

  newRecipe.save()
    .then(result =>  res.status(201).json({ success: true, data: result }))
    .catch(err => next(err));
}

export const deleteRecipe = (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  Recipe.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).json({ success: true, data: result }))
    .catch(err => next(err));
}