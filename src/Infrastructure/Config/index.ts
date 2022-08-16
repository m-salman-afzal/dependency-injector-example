import dotenv from "dotenv";
import path from "path";

import server from "./server";
import database from "./database";

dotenv.config();

const storagePath = path.resolve(__dirname, "../../../storage/");

export default {
    storagePath,
    server,
    database
};
