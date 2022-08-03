import {Service} from "typedi";


import logger from "../../Infrastructure/Logger/logger";

@Service()
class NewChairService {
    numberOfLegs(number: number) {
        try {
            console.log(`New Chair Service: This chair has ${number} legs`);
            return number + 3;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`New Chair Service: Does this chair has a back? ${exists}`);
            return !exists;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`New Chair Service: Does this chair has a cushion? ${exists}`);
            return !exists;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default NewChairService;
