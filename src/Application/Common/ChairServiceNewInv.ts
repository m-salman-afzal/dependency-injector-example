import {injectable} from "inversify";

import IChairServiceInv from "../InversifyService/IChairServiceInv";

import logger from "../../Infrastructure/Logger/logger";

@injectable()
class ChairServiceNewInv implements IChairServiceInv {
    numberOfLegs(number: number) {
        try {
            console.log(`New Chair Service Inversify: This chair has ${number + 3} legs`);
            return `New Chair Service Inversify: This chair has ${number + 3} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`New Chair Service Inversify: Does this chair has a back? ${!exists}`);
            return `New Chair Service Inversify: Does this chair has a back? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`New Chair Service Inversify: Does this chair has a cushion? ${exists}`);
            return `New Chair Service Inversify: Does this chair has a cushion? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceNewInv;
