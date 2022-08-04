import {Container} from "inversify";
import ChairService from "./DemoServices/ChairService";
import RobotService from "./DemoServices/RobotService";
import {TYPES} from "./Types";

const container = new Container();

container.bind<ChairService>(TYPES.IChairService).to(ChairService);
container.bind<RobotService>(TYPES.IRobotService).to(RobotService);

export default container;
