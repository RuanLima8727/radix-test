

import { AddEquipmentData } from '@/domain/usecases';
import { success, badRequest, serverError } from '@/presentation/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols';

export class AddEquipamentDataController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly sensorData: AddEquipmentData
  ) {}

  async handle(request: AddEquipmentDataController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request.body);

      if (error) {
        return badRequest(error);
      }

     await this.sensorData.add(request.body);

      return success({ message: 'Sensor Data successfully registered.' });
    } catch (error) {
      return serverError();
    }
  }

}

export namespace AddEquipmentDataController {
  export interface Request extends HttpRequest {
    body: {
      equipmentId: string
      timestamp: string
      value: number
      }
  };
};
