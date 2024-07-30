export namespace AddEquipmentData {
    export type Params = {
        equipmentId: string,
        timestamp: string,
        value: number
        }
    export type Result = boolean;
  }
  export interface AddEquipmentData {
    add(equipmentData: AddEquipmentData.Params): Promise<AddEquipmentData.Result>
  }
  