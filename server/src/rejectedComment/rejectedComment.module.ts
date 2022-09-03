import { Module } from "@nestjs/common";
import { RejectedCommentModuleBase } from "./base/rejectedComment.module.base";
import { RejectedCommentService } from "./rejectedComment.service";
import { RejectedCommentController } from "./rejectedComment.controller";

@Module({
  imports: [RejectedCommentModuleBase],
  controllers: [RejectedCommentController],
  providers: [RejectedCommentService],
  exports: [RejectedCommentService],
})
export class RejectedCommentModule {}
