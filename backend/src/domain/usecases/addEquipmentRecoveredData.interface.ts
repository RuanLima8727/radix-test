export namespace AddEquipmentRecoveredData {
    export type Params = {
      file: Buffer
    }
    export type Result = boolean;
  }
  export interface AddEquipmentRecoveredData {
    add(equipmentData: AddEquipmentRecoveredData.Params): Promise<AddEquipmentRecoveredData.Result>
  }
  