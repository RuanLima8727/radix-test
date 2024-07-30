import { AddEquipmentData } from "@/domain/usecases";

export interface AddEquipmentDataRepository {
  add(equipmentData: AddEquipmentData.Params): Promise<AddEquipmentData.Result>
}

export namespace AddEquipmentDataRepository {
  export type Params = AddEquipmentData.Params;
  export type Result = AddEquipmentData.Result;
}
