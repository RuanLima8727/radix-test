import { Controller } from '@/presentation/protocols';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      file: req?.file?.buffer as unknown as string
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message || httpResponse.body
      });
    }
    
  };
};
