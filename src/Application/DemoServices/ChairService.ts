import {Service} from "typedi";

import logger from "../../Infrastructure/Logger/logger";

@Service()
class ChairService {
    numberOfLegs(number: number) {
        try {
            console.log(`Chair Service: This chair has ${number} legs`);
            return number;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`Chair Service: Does this chair has a back? ${exists}`);
            return exists;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`Chair Service: Does this chair has a cushion? ${exists}`);
            return exists;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairService;
