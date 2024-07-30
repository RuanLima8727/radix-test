import { PrismaClient } from '@prisma/client';
export const PrismaHelper = {
  prisma: new PrismaClient(),
  client: null as any,
  
  async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
    } catch (oi) {}
  },
  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
    this.client = null;
  }
};
