import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TransactionServiceBase } from "./base/transaction.service.base";

@Injectable()
export class TransactionService extends TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
