import { EquipmentPrismaRepository } from '@/infra/database/prisma/repositories';
import { DbFindEquipmentData } from '@/data/usecases/equipmentData/';
import { FindEquipmentData } from '@/domain/usecases';

export const makeDbFindEquipmentData = (): FindEquipmentData => {
  const equipmentDataRepository = new EquipmentPrismaRepository();
  return new DbFindEquipmentData(equipmentDataRepository);
};


