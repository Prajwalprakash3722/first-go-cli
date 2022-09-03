import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RejectedCommentService } from "./rejectedComment.service";
import { RejectedCommentControllerBase } from "./base/rejectedComment.controller.base";

@swagger.ApiTags("rejectedComments")
@common.Controller("rejectedComments")
export class RejectedCommentController extends RejectedCommentControllerBase {
  constructor(
    protected readonly service: RejectedCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
