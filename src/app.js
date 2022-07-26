import express from "express";
import morgan from "morgan";
// Routes
import usersRoutes from "./routes/users.routes";
import subjectsRoutes from "./routes/subjects.routes";
import inscriptionsRoutes from "./routes/inscriptions.routes";
import logsRoutes from "./routes/logs.routes";

import { PrismaClient } from '@prisma/client'
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJSDoc = YAML.load('./api.yaml')
const prisma = new PrismaClient()
const app = express();


async function init() {
    const allUsers = await prisma.curso.findMany()
    console.log(allUsers)
}

init()
    .catch((e) => {
        throw e
    })
    .finally(async() => {
        await prisma.$disconnect()
    })



// Settings
app.set("port", 4000);

// Middlewares - Details about request and response
app.use(morgan("dev"));
app.use(express.json());

// Routes 

app.use("/api/users", usersRoutes);
app.use("/api/subjects", subjectsRoutes);
app.use("/api/inscriptions", inscriptionsRoutes);
app.use("/api/logs", logsRoutes);

// swagger
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

export default app;
