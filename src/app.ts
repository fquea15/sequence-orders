/** @format */

import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
import orderRoutes from "./routes/cart.routes";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(indexRoutes);
app.use("/api", orderRoutes)

export default app;
