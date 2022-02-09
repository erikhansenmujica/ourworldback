import * as mongoose from 'mongoose';

export const TileSchema = new mongoose.Schema({
  index: String,
  owner: String,
});
