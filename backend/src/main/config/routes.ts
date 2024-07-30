import { Express, Router } from 'express';
import { EquipmentRouter } from '../routes';

export default (app: Express): void => {
  const router = Router();
  EquipmentRouter(router);
  app.use('/',router);
};
