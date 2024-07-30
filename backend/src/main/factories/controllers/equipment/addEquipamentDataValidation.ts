import { Validation } from '@/presentation/protocols';
import { InputValidatorAdapter } from '@/infra/validators';
import { AddEquipamentDataValidation } from '@/validation/validators/equipamentData/addEquipamentDataValidation';

export default (): Validation => {
  return new AddEquipamentDataValidation(new InputValidatorAdapter());
};
