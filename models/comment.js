import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true
  },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe", 
    required: true
  },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
