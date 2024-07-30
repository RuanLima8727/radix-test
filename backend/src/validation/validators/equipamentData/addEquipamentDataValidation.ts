import { Validation } from '@/presentation/protocols';
import { InputValidatorAdapter } from '@/infra/validators';

export class AddEquipamentDataValidation implements Validation {
  constructor(
    private readonly inputValidatorAdapter: InputValidatorAdapter
  ) {}

  validate(input: Record<string, string | unknown>): string[] | null {
    const { validator, isValid } = this.inputValidatorAdapter;
    const addEquipamentDataSchema = validator.object({
        equipmentId: validator.string().required(),
        timestamp: validator.string().required(),
        value: validator.number().required()
    });

    return isValid(addEquipamentDataSchema, input);
  }
}
