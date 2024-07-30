import { EquipmentPrismaRepository } from '@/infra/database/prisma/repositories';
import { DbAddEquipmentData } from '@/data/usecases/equipmentData/';
import { AddEquipmentData } from '@/domain/usecases';

export const makeDbAddEquipmentData = (): AddEquipmentData => {
  const equipmentDataRepository = new EquipmentPrismaRepository();
  return new DbAddEquipmentData(equipmentDataRepository);
};


