import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(helmet());

//route imports
//routes declarations
//route imports
import animalRoutes from "./routes/animal.route.js";
import categoryRoutes from "./routes/category.route.js";

//routes declaration
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/animal", animalRoutes);

//default route

app.get("/", (req, res) => {
  res.send("Hello World");
});

export { app };
