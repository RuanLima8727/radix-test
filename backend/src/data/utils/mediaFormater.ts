import { FindEquipmentData } from '@/domain/usecases';

export const mediaFormater = (data: FindEquipmentData.Result[]): FindEquipmentData.FormatedResult[] => {

  const result = data.map(item=>{
    const { equipmentId, sensorData } = item

    let lenght: number;
    let totalValue: number = 0;
    let averageValue: number;

    lenght = sensorData.length

    sensorData.map(sensorDataItem=>{
      totalValue += sensorDataItem.value
    })

    averageValue = (totalValue/lenght)

    return {
      equipmentId,
      averageValue
    }

  })

    return result;
}