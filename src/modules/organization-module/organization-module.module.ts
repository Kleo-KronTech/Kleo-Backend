import { Module } from '@nestjs/common';
import { OrganizationModuleService } from './organization-module.service';
import { OrganizationModuleController } from './organization-module.controller';
import { RolesGuard } from '../../guards/roles.guard';
import { MockDatabaseModule } from '../../config/mock-db.module';

@Module({
  imports: [MockDatabaseModule],
  controllers: [OrganizationModuleController],
  providers: [OrganizationModuleService, RolesGuard]
})
export class OrganizationModule {}
