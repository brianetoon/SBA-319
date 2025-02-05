import Comment from "../models/comment.js";

export const getAllComments = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for all comments`);

  try {
    const result = await Comment.find();
    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}

export const createComment = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new comment`);

  try {
    const { text, userId, recipeId } = req.body;

    if (!text || !userId || !recipeId) {
      const error = new Error("Text, userId, and recipeId are required");
      error.status = 400;
      return next(error);
    }

    const newComment = new Comment({ text, userId, recipeId });
    const result = await newComment.save();

    res.status(201).json({ success: true, data: result });
  } catch(err) {
    next(err);
  }
}

export const deleteComment = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for comment ID: ${req.params.id}`);

  try {
    const result = await Comment.findByIdAndDelete(req.params.id);

    if (!result) {
      const error = new Error("Comment not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}