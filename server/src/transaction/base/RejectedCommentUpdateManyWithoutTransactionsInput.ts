/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RejectedCommentWhereUniqueInput } from "../../rejectedComment/base/RejectedCommentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class RejectedCommentUpdateManyWithoutTransactionsInput {
  @Field(() => [RejectedCommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RejectedCommentWhereUniqueInput],
  })
  connect?: Array<RejectedCommentWhereUniqueInput>;

  @Field(() => [RejectedCommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RejectedCommentWhereUniqueInput],
  })
  disconnect?: Array<RejectedCommentWhereUniqueInput>;

  @Field(() => [RejectedCommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RejectedCommentWhereUniqueInput],
  })
  set?: Array<RejectedCommentWhereUniqueInput>;
}
export { RejectedCommentUpdateManyWithoutTransactionsInput };