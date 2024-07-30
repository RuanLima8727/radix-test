export class ExistingParamError extends Error {
  constructor(paramName: string) {
    super(`The received ${paramName} is already in use.`);
  }
};
