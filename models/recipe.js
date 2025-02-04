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

recipeSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id", 
  foreignField: "recipeId"
});

recipeSchema.set("toObject", { virtuals: true });
recipeSchema.set("toJSON", { virtuals: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;

// User IDs
// "679fcc7f615ccc7f185ec100"
// "679fcd22615ccc7f185ec103"