interface IChairService {
    numberOfLegs(number: number): number;
    hasBack(exists: boolean): boolean;
    hasCushion(exists: boolean): boolean;
}
export default IChairService;
