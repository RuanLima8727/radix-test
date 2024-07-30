import { AddEquipmentDataRepository, FindEquipmentDataRepository } from '@/data/protocols/db/equipmentData';
import { PrismaHelper } from '../helpers/prismaHelper';
import { AddManyEquipmentDataRepository } from '@/data/protocols/db/equipmentData/';

export class EquipmentPrismaRepository implements AddEquipmentDataRepository, FindEquipmentDataRepository, AddManyEquipmentDataRepository {
  async add(
    equipmentData: AddEquipmentDataRepository.Params
  ): Promise<AddEquipmentDataRepository.Result> {

    const prisma = PrismaHelper.prisma
    const { sensorData: sensorDataModel, equipment: equipmentDataModel } = prisma;

    const { equipmentId, timestamp, value } = equipmentData

    const equipmentDatabaseData = await equipmentDataModel.findFirst({
      where: {
        equipmentId
      }
    })

    const result = await sensorDataModel.create({
      data: {
        value,
        timestamp,
        equipmentId: equipmentDatabaseData!.id
      }
    })


    return !!result;

  }

  async addMany(
    equipmentData: AddEquipmentDataRepository.Params[]
  ): Promise<AddEquipmentDataRepository.Result> {

    const prisma = PrismaHelper.prisma
    const { sensorData: sensorDataModel, equipment: equipmentDataModel } = prisma;

    let finalObject: { equipmentId: number, timestamp: string, value: number }[] = [];

    for (let i = 0; i < equipmentData.length; i++) {
      const equipmentDatabaseData = await equipmentDataModel.findFirst({
        where: {
          equipmentId: equipmentData[i].equipmentId
        }
      })

      const { timestamp, value } = equipmentData[i]
      
      finalObject.push(Object.assign({}, { equipmentId: equipmentDatabaseData!.id }, {timestamp}, {value: Number(value)}))
    }

    const result = await sensorDataModel.createMany({
      data: finalObject
    })

    return !!result;

  }



  async find(startDate: Date): Promise<FindEquipmentDataRepository.Result> {
    const { prisma } = PrismaHelper;
    const { equipment: equipmentModel } = prisma;

    console.log("startDate.toISOString()", startDate.toISOString())

    const equipmentData = await equipmentModel.findMany({
      where: {
        sensorData: {
          some: {
            timestamp: {
              gte: startDate.toISOString()
            }
          }
        },
      },
      select: {
        equipmentId: true,
        sensorData: {
          select: {
            value: true
          }
        }
      }
    })

    return equipmentData;
  }

  // Todo: Standardize the time zone

}
