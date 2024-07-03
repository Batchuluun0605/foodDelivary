import express from "express";
import {
  addToCart,
  getToCart,
  removeFromcart,
} from "../controller/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromcart);
cartRouter.post("/get", authMiddleware, getToCart);

export default cartRouter;
