import express from "express";
import morgan from "morgan";
// Routes
import usersRoutes from "./routes/users.routes";
import subjectsRoutes from "./routes/subjects.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares - Details about request and response
app.use(morgan("dev"));

// Routes 
app.use("/api/users", usersRoutes);
app.use("/api/subjects", subjectsRoutes);

export default app;