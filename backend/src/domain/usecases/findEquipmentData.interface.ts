export namespace FindEquipmentData {
    export type Params = {
      dataFilter: string
    }
    export type Result = {
      equipmentId: string
      sensorData: {
        value: number
      }[]
    };
    export type FormatedResult = {
      equipmentId: string
      averageValue: number
    };
  }
  export interface FindEquipmentData {
    find(equipmentData: FindEquipmentData.Params): Promise<FindEquipmentData.FormatedResult[]>
  }
  
