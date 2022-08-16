import {Container} from "inversify";

import {TYPES} from "../Types";

import IChairServiceInv from "./IChairServiceInv";
import IRobotServiceInv from "./IRobotServiceInv";

import ChairServiceInv from "./ChairServiceInv";
import RobotServiceInv from "./RobotServiceInv";

// (for Inverisfy) For changing dependency, you need to use ChairServiceNewInv here and bind it to the already made TYPE
import ChairServiceNewInv from "../Common/ChairServiceNewInv";

const container = new Container();

// (for Inverisfy) Use ChairServiceNewInv after in .to() method to bind it.
container.bind<IChairServiceInv>(TYPES.IChairServiceInv).to(ChairServiceInv);
container.bind<IRobotServiceInv>(TYPES.IRobotServiceInv).to(RobotServiceInv);

export default container;
