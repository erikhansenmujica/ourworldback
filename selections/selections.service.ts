import { Model } from 'mongoose';
import { Injectable, Inject, Logger } from '@nestjs/common';
import { ISelection } from './interfaces/selection.interface';
import { SELECTION_MODEL, TILE_MODEL } from './constants';
import { CreateSelectionDto } from './dto/create-selection.dto';
import { ITile } from './interfaces/tile.interface';
import { CreateTileDto } from './dto/create-tile.dto';
@Injectable()
export class SelectionsService {
  constructor(
    @Inject(SELECTION_MODEL)
    private selectionModel: Model<ISelection>,
    @Inject(TILE_MODEL)
    private tileModel: Model<ITile>,
  ) {}
  async create(createSelection: CreateSelectionDto): Promise<ISelection> {
    const createdSelection = new this.selectionModel(createSelection);
    const tiles: CreateTileDto[] = createSelection.ownedTiles.map(
      (t: string) => ({
        owner: createSelection.userId,
        index: t,
      }),
    );
    await this.tileModel.collection.insertMany(tiles);
    return createdSelection.save();
  }
  async findAll(): Promise<ISelection[]> {
    return this.selectionModel.find().exec();
  }
  async findAllOwnedTiles(): Promise<ITile[]> {
    return this.tileModel.find().exec();
  }
  async getByBoundaries(indexes: String[]): Promise<ITile[]> {
    return await this.tileModel.find({ index: { $in: indexes } });
  }
  async getOne(userId: string): Promise<ISelection> {
    return this.selectionModel.findOne({ userId });
  }
}
