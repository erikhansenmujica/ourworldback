import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import mongoose from 'mongoose';
import { ISelection } from './interfaces/selection.interface';
import { SelectionsService } from './selections.service';

@Controller('/selections')
export class SelectionController {
  constructor(private readonly selectionService: SelectionsService) {}
  @Get('/all')
  async getSelections(): Promise<ISelection[]> {
    return await this.selectionService.findAll();
  }
  @Get('/one/:id')
  async getSelection(@Param('id') id: string): Promise<ISelection> {
    return await this.selectionService.getOne(id);
  }
  @Post('/in/boundaries')
  async getTilesByBoundaries(
    @Body() indexes: { data: number[] },
  ): Promise<any[]> {
    const res = await this.selectionService.getByBoundaries(indexes.data);
    return res;
  }
  @Post('/new')
  async createSelection(
    @Body() body: { userId: string; geometry: mongoose.Schema.Types.Geometry },
  ): Promise<ISelection> {
    console.log(body);
    return await this.selectionService.create(body);
  }
}
