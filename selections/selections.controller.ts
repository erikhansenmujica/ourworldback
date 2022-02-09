import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { bigArray } from './bigArray';
import { ISelection } from './interfaces/selection.interface';
import { ITile } from './interfaces/tile.interface';
import { SelectionsService } from './selections.service';

@Controller('/selections')
export class SelectionController {
  constructor(private readonly selectionService: SelectionsService) {}
  @Get('/all')
  async getSelections(): Promise<ISelection[]> {
    return await this.selectionService.findAll();
  }
  @Get('/all/tiles')
  async getAllTiles(): Promise<ITile[]> {
    return await this.selectionService.findAllOwnedTiles();
  }
  @Get('/one/:id')
  async getSelection(@Param('id') id: string): Promise<ISelection> {
    return await this.selectionService.getOne(id);
  }
  @Post('/in/boundaries')
  async getTilesByBoundaries(
    @Body() indexes: { data: String[] },
  ): Promise<ITile[]> {
    const res = await this.selectionService.getByBoundaries(indexes.data);
    return res;
  }
  @Post('/new')
  async createSelection(
    @Body() body: { userId: string; ownedTiles: String[] },
  ): Promise<ISelection> {
    return await this.selectionService.create(body);
  }
}
