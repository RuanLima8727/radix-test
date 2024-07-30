
import { AddManyEquipmentDataRepository } from '@/data/protocols/db/equipmentData/';
import { parseSVGtoJSON } from '@/data/utils/parseSVGtoJSON';
import { AddEquipmentRecoveredData } from '@/domain/usecases';
export class DbAddEquipmentRecoveredData implements AddEquipmentRecoveredData {
  constructor (
    private readonly AddEquipmentDataRepository: AddManyEquipmentDataRepository
  ) {}

  async add(equipmentData: AddEquipmentRecoveredData.Params): Promise<AddEquipmentRecoveredData.Result> {
    let isValid = false;

    const parsedEquipmentData: any = await parseSVGtoJSON(equipmentData)

    isValid = await this.AddEquipmentDataRepository.addMany(parsedEquipmentData);
    return isValid;
  }
};
