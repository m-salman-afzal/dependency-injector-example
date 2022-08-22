import {Service} from "typedi";

import IChairServiceTd from "../TypeDiService/IChairServiceTd";

import logger from "../../Infrastructure/Logger/logger";

@Service()
class ChairServiceNewTd implements IChairServiceTd {
    numberOfLegs(number: number) {
        try {
            console.log(`New Chair Service TypeDi: This chair has ${number + 3} legs`);
            return `New Chair Service TypeDi: This chair has ${number + 3} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`New Chair Service TypeDi: Does this chair has a back? ${!exists}`);
            return `New Chair Service TypeDi: Does this chair has a back? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`New Chair Service TypeDi: Does this chair has a cushion? ${exists}`);
            return `New Chair Service TypeDi: Does this chair has a cushion? ${!exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceNewTd;
