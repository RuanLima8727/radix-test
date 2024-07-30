import { Controller } from '@/presentation/protocols';
import { AddEquipmentRecoveredDataController } from '@/presentation/controllers/equipment/';
import { makeEquipmentRecoveredValidator } from '..';
import { makeDbAddEquipmentRecoveredData } from '../../usecases';

export const makeAddEquipmentRecoveredDataController = (): Controller => {
    const equipmentController = new AddEquipmentRecoveredDataController(
        makeEquipmentRecoveredValidator(),
        makeDbAddEquipmentRecoveredData()
    );
    return equipmentController;
};
