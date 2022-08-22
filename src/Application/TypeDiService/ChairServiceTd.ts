import {Service} from "typedi";

import IChairServiceTd from "./IChairServiceTd";

import logger from "../../Infrastructure/Logger/logger";

@Service()
class ChairServiceTd implements IChairServiceTd {
    numberOfLegs(number: number) {
        try {
            console.log(`Chair Service TypeDi: This chair has ${number} legs`);
            return `Chair Service TypeDi: This chair has ${number} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`Chair Service TypeDi: Does this chair has a back? ${exists}`);
            return `Chair Service TypeDi: Does this chair has a back? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`Chair Service TypeDi: Does this chair has a cushion? ${exists}`);
            return `Chair Service TypeDi: Does this chair has a cushion? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceTd;
