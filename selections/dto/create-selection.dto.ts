import GeoJson from 'mongoose-geojson-schema';
import * as mongoose from 'mongoose';
export interface CreateSelectionDto {
  userId: String;
  geometry: mongoose.Schema.Types.Geometry;
}
