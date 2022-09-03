import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ApprovedCommentServiceBase } from "./base/approvedComment.service.base";

@Injectable()
export class ApprovedCommentService extends ApprovedCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
