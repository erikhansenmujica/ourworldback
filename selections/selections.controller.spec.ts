import { Test, TestingModule } from '@nestjs/testing';
import { SelectionController } from './selections.controller';
import { SelectionsService } from './selections.service';

describe('SelectionsController', () => {
  let selections: TestingModule;
  beforeAll(async () => {
    selections = await Test.createTestingModule({
      controllers: [SelectionController],
      providers: [SelectionsService],
    }).compile();
  });
  describe('getAllTiles', () => {});
});
