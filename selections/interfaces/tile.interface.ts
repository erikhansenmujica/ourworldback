import { Document } from 'mongoose';

export interface ITile extends Document {
  readonly index: String;
  readonly owner: String;
}
