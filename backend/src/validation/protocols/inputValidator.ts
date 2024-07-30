export interface InputValidator<T, S> {
  isValid: (schema: S, objectToValidate: object) => string[] | null
  validator: T
};
