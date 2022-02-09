import { Module } from '@nestjs/common';
import { SelectionController } from './selections.controller';
import { SelectionsService } from './selections.service';
import { selectionsProvider } from './selections.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SelectionController],
  providers: [SelectionsService, ...selectionsProvider],
})
export class SelectionsModule {}
