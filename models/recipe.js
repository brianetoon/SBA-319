import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true 
  },
  imgUrl: {
    type: String
  },
  userId: {
    // type: mongoose.Schema.Types.ObjectId, 
    // ref: 'User', 
    type: Number,
    required: true 
  }

}, {timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;