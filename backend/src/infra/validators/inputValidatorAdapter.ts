import { InputValidator } from '@/validation/protocols';
import Joi, { AnySchema } from 'joi';

export class InputValidatorAdapter implements InputValidator<typeof Joi, AnySchema> {
  isValid(schema: AnySchema, objectToValidate: object): string[] | null {
    const { error } = schema.validate(objectToValidate, { abortEarly: false });
    if (error) return error.details.map((d) => d.message);
    return null;
  }

  validator = Joi;
}
