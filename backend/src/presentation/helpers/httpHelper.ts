import { HttpResponse } from '../protocols/http';
import { ServerError } from '../errors';

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
});

export const badRequest = (error: Error | string[] | null): HttpResponse => ({
  statusCode: 400,
  body: error
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
});
