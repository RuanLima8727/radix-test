import { AddEquipmentData } from "@/domain/usecases";

export interface AddManyEquipmentDataRepository {
  addMany(equipmentData: AddEquipmentData.Params[]): Promise<AddEquipmentData.Result>
}

export namespace AddManyEquipmentDataRepository {
  export type Params = AddEquipmentData.Params;
  export type Result = AddEquipmentData.Result;
}
