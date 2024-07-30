

import { AddEquipmentRecoveredData } from '@/domain/usecases';
import { fileValidator } from '@/presentation/helpers/fileValidator';
import { success, badRequest, serverError } from '@/presentation/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols';

export class AddEquipmentRecoveredDataController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly sensorData: AddEquipmentRecoveredData
  ) {}

  async handle(request: AddEquipmentRecoveredController.Request): Promise<HttpResponse> {
    try {

      const type = fileValidator(request.file)

      if (!type || !'csv') {
        return badRequest(["Invalid File Error"]);
      }
            
     await this.sensorData.add({file: request.file});

      return success({ message: 'Sensor Recovered Data successfully registered.' });
    } catch (error) {
      return serverError();
    }
  }

}

export namespace AddEquipmentRecoveredController {
  export interface Request extends HttpRequest {
    file: Buffer
  };
};
