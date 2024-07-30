

import { FindEquipmentData } from '@/domain/usecases/';
import { success, badRequest, serverError } from '@/presentation/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols';

export class FindEquipamentDataController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly sensorData: FindEquipmentData
  ) {}

  async handle(request: FindEquipmentDataController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request.query);

      if (error) {
        return badRequest(error);
      }

     const result = await this.sensorData.find(request.query);

      return success(result);
    } catch (error) {
      return serverError();
    }
  }

}

export namespace FindEquipmentDataController {
  export interface Request extends HttpRequest {
    query: {
      dataFilter: string
    }
  };
};
