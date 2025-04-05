import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app =express();

dotenv.config({path:"./config/config.env"});

app.use(
    cors({
    origin: [process.env.FRONTEND_URL],  // Allows only the specified frontend URL
    methods: ["POST"],                   // Restricts allowed HTTP methods to POST only
    credentials: true                    // Allows cookies and credentials to be sent
}));

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('https://restaurant-frontend-6gql.onrender.com',reservationRouter);
// /api/v1/reservation
dbConnection();
app.use(errorMiddleware);

export default app;

 
