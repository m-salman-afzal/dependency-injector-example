import {Service} from "typedi";

import logger from "../../Infrastructure/Logger/logger";

@Service()
class WindowService {
    numberOfPanes(number: number) {
        try {
            console.log(`New Window Service: This window has ${number} panes`);
            return number;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasGrill(exists: boolean) {
        try {
            console.log(`New Window Service: Does this window has a Grill? ${exists}`);
            return exists;
        } catch (e) {
            logger.error(e.message);
        }
    }

    material(material: boolean) {
        try {
            console.log(`New Window Service: This window is made of ${material}`);
            return material;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default WindowService;
