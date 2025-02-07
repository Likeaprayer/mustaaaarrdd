import express from "express";
import dotenv from "dotenv";
import routes from "./router";

//TODO: add cors

const app = express();
dotenv.config();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api',routes);

export default app;