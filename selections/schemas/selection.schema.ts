import GeoJson from 'mongoose-geojson-schema';
import * as mongoose from 'mongoose';

export const SelectionSchema = new mongoose.Schema({
  userId: String,
  geometry: mongoose.Schema.Types.Geometry,
});
