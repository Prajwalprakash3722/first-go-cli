import { Module } from "@nestjs/common";
import { TransactionModuleBase } from "./base/transaction.module.base";
import { TransactionService } from "./transaction.service";
import { TransactionController } from "./transaction.controller";

@Module({
  imports: [TransactionModuleBase],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
