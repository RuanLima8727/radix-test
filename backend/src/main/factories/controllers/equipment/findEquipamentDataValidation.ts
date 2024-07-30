import { Validation } from '@/presentation/protocols';
import { InputValidatorAdapter } from '@/infra/validators';
import { FindEquipamentDataValidation } from '@/validation/validators/equipamentData/';

export default (): Validation => {
  return new FindEquipamentDataValidation(new InputValidatorAdapter());
};
