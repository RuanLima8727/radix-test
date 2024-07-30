import { Controller } from '@/presentation/protocols';
import makeFindEquipmentValidator from './findEquipamentDataValidation';
import { makeDbFindEquipmentData } from '../../usecases';
import { FindEquipamentDataController } from '@/presentation/controllers/equipment/';

export const makeFindEquipmentController = (): Controller => {
    const equipmentController = new FindEquipamentDataController(
        makeFindEquipmentValidator(),
        makeDbFindEquipmentData()
    );
    return equipmentController;
};
