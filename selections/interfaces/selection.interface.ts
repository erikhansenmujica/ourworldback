import { Document } from 'mongoose';

export interface ISelection extends Document {
  readonly userId: String;
  readonly ownedTiles: String[];
}
