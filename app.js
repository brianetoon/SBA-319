import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import errorHandler from "./middlewares/errorHandler.js";
import recipesRoutes from "./routes/recipesRoutes.js"

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// API Routes
app.use("/api/recipes", recipesRoutes);

// Error Handler
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening for requets on port ${port}`)
  });
});