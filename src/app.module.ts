import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DevService,
      imports: [],
    }),
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
