
import { AddEquipmentDataRepository } from '@/data/protocols/db/equipmentData';
import { AddEquipmentData } from '@/domain/usecases';
export class DbAddEquipmentData implements AddEquipmentData {
  constructor (
    private readonly AddEquipmentDataRepository: AddEquipmentDataRepository
  ) {}

  async add(equipmentData: AddEquipmentData.Params): Promise<AddEquipmentData.Result> {
    let isValid = false;
    
    isValid = await this.AddEquipmentDataRepository.add(equipmentData);
    return isValid;
  }
};
