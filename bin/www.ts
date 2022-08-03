import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config();

import "reflect-metadata";

import app from "../http/Server";
import Config from "../src/Infrastructure/Config";
import logger from "../src/Infrastructure/Logger/logger";

const {server} = Config;

(async () => {
    try {
        app.listen(server.PORT, () => {
            logger.info(
                "dependency-injector-example listening on port 8080, make a GET request on http://localhost:8080/robot"
            );
        });
    } catch (e) {
        logger.error(`ServerError: ${e.message}`);
    }
})();
