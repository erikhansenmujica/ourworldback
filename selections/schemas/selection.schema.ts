import GeoJson from 'mongoose-geojson-schema';
import * as mongoose from 'mongoose';

const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true,
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
    required: true,
  },
});

export const SelectionSchema = new mongoose.Schema({
  userId: String,
  geometry: polygonSchema,
});
