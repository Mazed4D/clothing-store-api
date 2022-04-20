import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './ormconfig';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClothingModule } from './clothing/clothing.module';
import { ClothingModule } from './clothing/clothing.module';
import { TopsModule } from './tops/tops.module';
import { BottomsModule } from './bottoms/bottoms.module';
import { ClothingModule } from './clothing/clothing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    UsersModule,
    AuthModule,
    ClothingModule,
    TopsModule,
    BottomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
