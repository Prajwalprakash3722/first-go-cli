import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovedCommentService } from "./approvedComment.service";
import { ApprovedCommentControllerBase } from "./base/approvedComment.controller.base";

@swagger.ApiTags("approvedComments")
@common.Controller("approvedComments")
export class ApprovedCommentController extends ApprovedCommentControllerBase {
  constructor(
    protected readonly service: ApprovedCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
