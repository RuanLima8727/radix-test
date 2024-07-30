import { PrismaHelper } from '@/infra/database/prisma/helpers/prismaHelper';
import { NextFunction, Request } from 'express';

export default (req: Request, res: any, next: NextFunction): void => {
  const send = res.send;
  res.send = async function (body: any) {
    await PrismaHelper.disconnect();
    await send.call(this, body);
  };
  next();
};
