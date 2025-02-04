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
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }

}, {timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;

// "679fcc7f615ccc7f185ec100"
// "679fcd22615ccc7f185ec103"