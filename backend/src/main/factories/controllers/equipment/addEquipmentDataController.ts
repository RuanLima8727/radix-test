import { Controller } from '@/presentation/protocols';
import { AddEquipamentDataController } from '@/presentation/controllers/equipment/';
import { makeEquipmentValidator } from '..';
import { makeDbAddEquipmentData } from '../../usecases';

export const makeAddEquipmentController = (): Controller => {
    const equipmentController = new AddEquipamentDataController(
        makeEquipmentValidator(),
        makeDbAddEquipmentData()
    );
    return equipmentController;
};
