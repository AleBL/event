import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [EventsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
