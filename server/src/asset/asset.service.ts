import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AssetServiceBase } from "./base/asset.service.base";

@Injectable()
export class AssetService extends AssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
