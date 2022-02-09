import * as mongoose from 'mongoose';

export const SelectionSchema = new mongoose.Schema({
  userId: String,
  ownedTiles: [String],
});
