import { Validation } from '@/presentation/protocols';
import { InputValidatorAdapter } from '@/infra/validators';
import { AddEquipamentRecoveredDataValidation } from '@/validation/validators/equipamentData/addEquipamentRecoveredDataValidation';

export default (): Validation => {
  return new AddEquipamentRecoveredDataValidation(new InputValidatorAdapter());
};
