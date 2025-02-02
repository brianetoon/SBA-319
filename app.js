import express from "express";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorHandler.js";
import recipesRoutes from "./routes/recipesRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// API Routes
app.use("/api/recipes", recipesRoutes);
app.use("/api/users", usersRoutes);

// Error Handler
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening for requets on port ${port}`)
  });
});