// ------------------ Static functions

/*
 * This function can be used to find type of subcontainers. 
 * This type can be either a Parameter or a PacketContainer
 * 
 */
export function isParameter(abstractContainer: AbstractContainer): boolean {
  return (<Parameter>abstractContainer).fixedValue !== undefined;
}

// ------------------ The model

export class SpacePacket {
  

  name: string;

  description: string;

  receptionDate: string;

  onBoardDate: string;

  rootContainer: PacketContainer;

}

export abstract class AbstractContainer {

}

export class PacketContainer extends AbstractContainer {

  repetitionNumber: number = 0;

  parameterRef: number = null;

  name: string;

  subContainers: Array<AbstractContainer>;

}

export class Parameter extends AbstractContainer {

  fixedValue: boolean = false;

  pfc: number;

  ptc: number;

  /**
   * The length in bits.
   */
  length: number;

  name: string;

  description: string;

  rawData: string;

  rawValue: Value;

  physicalValue: Value;

  calibration: Calibration;

  monitorings: Array<Monitoring>;

  offset: number;

  // Maybe insert Unit into PhysicalValue, for that create a class physical value which extends
  // Value
  unit: Unit;
}

export class Calibration {

}

export class Value {

}

export class Unit {
  unit: String;

  description: string;

  power: number;

  factor: number;
}

export class Monitoring {

}

