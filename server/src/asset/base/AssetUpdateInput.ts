/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumAssetAssetType } from "./EnumAssetAssetType";
import { IsEnum, IsOptional, ValidateNested, IsString } from "class-validator";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class AssetUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumAssetAssetType,
  })
  @IsEnum(EnumAssetAssetType)
  @IsOptional()
  @Field(() => EnumAssetAssetType, {
    nullable: true,
  })
  assetType?: "Report" | "Bills" | null;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereUniqueInput)
  @IsOptional()
  @Field(() => TransactionWhereUniqueInput, {
    nullable: true,
  })
  transaction?: TransactionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;
}
export { AssetUpdateInput };
