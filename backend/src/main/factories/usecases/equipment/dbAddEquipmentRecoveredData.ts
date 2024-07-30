import { EquipmentPrismaRepository } from '@/infra/database/prisma/repositories';
import { DbAddEquipmentRecoveredData } from '@/data/usecases/equipmentData/';
import { AddEquipmentRecoveredData } from '@/domain/usecases';

export const makeDbAddEquipmentRecoveredData = (): AddEquipmentRecoveredData => {
  const equipmentDataRepository = new EquipmentPrismaRepository();
  return new DbAddEquipmentRecoveredData(equipmentDataRepository);
};


