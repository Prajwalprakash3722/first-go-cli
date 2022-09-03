import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RejectedCommentServiceBase } from "./base/rejectedComment.service.base";

@Injectable()
export class RejectedCommentService extends RejectedCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
