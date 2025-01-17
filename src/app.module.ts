import { FetchModule } from 'nestjs-fetch';
import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './app.service';

@Module({
  imports: [SharedModule,FetchModule],
  controllers: [AppController],
  providers: [AppService,ApiService],
})
export class AppModule {}
