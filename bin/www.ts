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
                "oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration"
            );
        });
    } catch (e) {
        logger.error(`ServerError: ${e.message}`);
    }
})();
