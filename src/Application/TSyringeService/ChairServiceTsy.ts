import {injectable} from "tsyringe";

import IChairServiceTsy from "./IChairServiceTsy";

import logger from "../../Infrastructure/Logger/logger";

@injectable()
class ChairServiceTsy implements IChairServiceTsy {
    numberOfLegs(number: number) {
        try {
            console.log(`Chair Service TSyringe: This chair has ${number} legs`);
            return `Chair Service TSyringe: This chair has ${number} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`Chair Service TSyringe: Does this chair has a back? ${exists}`);
            return `Chair Service TSyringe: Does this chair has a back? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`Chair Service TSyringe: Does this chair has a cushion? ${exists}`);
            return `Chair Service TSyringe: Does this chair has a cushion? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceTsy;
