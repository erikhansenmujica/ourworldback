import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectionsModule } from 'selections/selections.module';
@Module({
  imports: [SelectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
