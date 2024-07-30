import { Validation } from '@/presentation/protocols';
import { InputValidatorAdapter } from '@/infra/validators';

export class FindEquipamentDataValidation implements Validation {
  constructor(
    private readonly inputValidatorAdapter: InputValidatorAdapter
  ) {}

  validate(input: Record<string, string | unknown>): string[] | null {
    const { validator, isValid } = this.inputValidatorAdapter;
    const findEquipamentDataSchema = validator.object({
      dataFilter: validator.string().required()
    });

    return isValid(findEquipamentDataSchema, input);
  }
}
