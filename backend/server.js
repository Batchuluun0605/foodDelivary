import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/Db.js";
import foodRouter from "./routes/foodRoutes.js";
// import cartRouter from "./routes/cartRoutes.js";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

connectDatabase();

app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
// tbIDI6Fuy2aQeggv;
