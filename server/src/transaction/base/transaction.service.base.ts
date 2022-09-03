/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Transaction,
  ApprovedComment,
  Asset,
  RejectedComment,
} from "@prisma/client";

export class TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>
  ): Promise<number> {
    return this.prisma.transaction.count(args);
  }

  async findMany<T extends Prisma.TransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany(args);
  }
  async findOne<T extends Prisma.TransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindUniqueArgs>
  ): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique(args);
  }
  async create<T extends Prisma.TransactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.create<T>(args);
  }
  async update<T extends Prisma.TransactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionUpdateArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.update<T>(args);
  }
  async delete<T extends Prisma.TransactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDeleteArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.delete(args);
  }

  async findApprovedComments(
    parentId: string,
    args: Prisma.ApprovedCommentFindManyArgs
  ): Promise<ApprovedComment[]> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .approvedComments(args);
  }

  async findAssets(
    parentId: string,
    args: Prisma.AssetFindManyArgs
  ): Promise<Asset[]> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .assets(args);
  }

  async findRejectedComments(
    parentId: string,
    args: Prisma.RejectedCommentFindManyArgs
  ): Promise<RejectedComment[]> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .rejectedComments(args);
  }
}
