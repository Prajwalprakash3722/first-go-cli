import { Module } from "@nestjs/common";
import { AssetModuleBase } from "./base/asset.module.base";
import { AssetService } from "./asset.service";
import { AssetController } from "./asset.controller";

@Module({
  imports: [AssetModuleBase],
  controllers: [AssetController],
  providers: [AssetService],
  exports: [AssetService],
})
export class AssetModule {}
