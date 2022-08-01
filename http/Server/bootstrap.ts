import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

const bootstrap = express();

bootstrap.set("trust proxy", true);
bootstrap.set("view engine", "ejs");
bootstrap.set("views", path.resolve(__dirname, "../../views"));

const limit = {
    limit: "50mb",
    extended: true
};

bootstrap.use(express.json(limit));
bootstrap.use(express.urlencoded(limit));
bootstrap.use(cors());

bootstrap.use(morgan("dev"));

export default bootstrap;
