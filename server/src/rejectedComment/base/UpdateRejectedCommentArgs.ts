/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { RejectedCommentWhereUniqueInput } from "./RejectedCommentWhereUniqueInput";
import { RejectedCommentUpdateInput } from "./RejectedCommentUpdateInput";

@ArgsType()
class UpdateRejectedCommentArgs {
  @Field(() => RejectedCommentWhereUniqueInput, { nullable: false })
  where!: RejectedCommentWhereUniqueInput;
  @Field(() => RejectedCommentUpdateInput, { nullable: false })
  data!: RejectedCommentUpdateInput;
}

export { UpdateRejectedCommentArgs };
