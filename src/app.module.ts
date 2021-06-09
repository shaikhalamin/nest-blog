import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import * as config from '../orm-config.js';

const mySQLUrl = process.env.DB_URL;
const driverType = mySQLUrl ? 'mysql' : 'postgres';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config,
      url: process.env.DATABASE_URL || mySQLUrl,
      type: driverType,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
