import { Module } from "@nestjs/common";
import { ApprovedCommentModuleBase } from "./base/approvedComment.module.base";
import { ApprovedCommentService } from "./approvedComment.service";
import { ApprovedCommentController } from "./approvedComment.controller";

@Module({
  imports: [ApprovedCommentModuleBase],
  controllers: [ApprovedCommentController],
  providers: [ApprovedCommentService],
  exports: [ApprovedCommentService],
})
export class ApprovedCommentModule {}
