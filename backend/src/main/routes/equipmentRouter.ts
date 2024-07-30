import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/expressRouteAdapter';
import { makeAddEquipmentController, makeAddEquipmentRecoveredDataController } from '@/main/factories/controllers';
import { fileAdapter } from '../adapters/fileAdapter';
import { makeFindEquipmentController } from '../factories/controllers/equipment/findEquipmentDataController';



export default (router: Router): void => {
  router.post('/sensorData', adaptRoute(makeAddEquipmentController()));
  router.post('/sensorRecoveredData', fileAdapter(), adaptRoute(makeAddEquipmentRecoveredDataController()));
  router.get('/sensorData', adaptRoute(makeFindEquipmentController()));
};
