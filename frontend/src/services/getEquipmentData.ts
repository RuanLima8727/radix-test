import { api } from "./api"
import { toast } from 'react-toastify'

export const getEquipmentData = async (filter: string): Promise<SensorDataResult> => {
  try {
    const resp = await api.get(`/sensorData?dataFilter=${filter}`)
    const data: SensorData[] = resp.data

    let equipmentData: number[] = [];
    let sensorLabelData: string[] = [];

    data.map(item => {
      equipmentData.push(item.averageValue)
      sensorLabelData.push(item.equipmentId)
    })

    return {
      equipmentData,
      sensorLabelData
    };
  } catch (err) {
    toast.error('Data Could Not Be Found')
    return {equipmentData: [1,2,3], sensorLabelData: ["A", "B", "C"]}
  }
}

export type SensorData = {
  equipmentId: string
  averageValue: number
}

export type SensorDataResult = {
  equipmentData: number[]
  sensorLabelData: string[]
}