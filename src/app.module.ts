import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { AuthModule } from './modules/auth/auth.module';
import { LocalStorageModule } from './config/local-storage.module';
import { OrganizationModule } from './modules/organization-module/organization-module.module';
import { MockDatabaseModule } from './config/mock-db.module';

@Module({
  imports: [MockDatabaseModule, LocalStorageModule, AuthModule, OrganizationModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard
    }
  ]
})
export class AppModule {}
