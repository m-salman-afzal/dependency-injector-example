import {injectable} from "tsyringe";

import IChairServiceTsy from "../TSyringeService/IChairServiceTsy";

import logger from "../../Infrastructure/Logger/logger";

@injectable()
class ChairServiceNewTsy implements IChairServiceTsy {
    numberOfLegs(number: number) {
        try {
            console.log(`New Chair Service TSyringe: This chair has ${number + 3} legs`);
            return `New Chair Service TSyringe: This chair has ${number + 3} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`New Chair Service TSyringe: Does this chair has a back? ${!exists}`);
            return `New Chair Service TSyringe: Does this chair has a back? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`New Chair Service TSyringe: Does this chair has a cushion? ${exists}`);
            return `New Chair Service TSyringe: Does this chair has a cushion? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceNewTsy;
