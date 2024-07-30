import { FindEquipmentData } from "@/domain/usecases";

export interface FindEquipmentDataRepository {
  find(startDate: Date, now: Date): Promise<FindEquipmentData.Result[]>
}

export namespace FindEquipmentDataRepository {
  export type Params = FindEquipmentData.Params;
  export type Result = FindEquipmentData.Result[];
}
