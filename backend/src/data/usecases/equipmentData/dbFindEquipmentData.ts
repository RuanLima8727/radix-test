
import { FindEquipmentDataRepository } from '@/data/protocols/db/equipmentData';
import { mediaFormater } from '@/data/utils/mediaFormater';
import { timeRangeFilter } from '@/data/utils/timeRangeFilter';
import { FindEquipmentData } from '@/domain/usecases';
export class DbFindEquipmentData implements FindEquipmentData {
  constructor (
    private readonly FindEquipmentDataRepository: FindEquipmentDataRepository
  ) {}

  async find(equipmentData: FindEquipmentData.Params): Promise<FindEquipmentData.FormatedResult[]> {
    
    const { now, startDate } = timeRangeFilter(equipmentData.dataFilter)

    const equipmentDataResult = await this.FindEquipmentDataRepository.find(startDate, now);

    const mediaEquipmentData = mediaFormater(equipmentDataResult)
    return mediaEquipmentData;
  }
};
