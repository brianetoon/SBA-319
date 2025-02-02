import User from "../models/user.js";

export const getAllUsers = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for all users`);

  try {
    const result = await User.find();
    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}

export const createUser = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new user`);

  try {
    const newUser = new User(req.body);
    const result = await newUser.save();

    res.status(201).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}

export const getUserById = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for user ID: ${req.params.id}`);

  try {
    const result = await User.findById(req.params.id);

    if (!result) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err);
  }
}

export const deleteUser = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for user ID: ${req.params.id}`);

  try {
    const result = await User.findByIdAndDelete(req.params.id);

    if (!result) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}