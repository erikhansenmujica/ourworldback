import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, SELECTION_MODEL, TILE_MODEL } from './constants';
import { SelectionSchema } from './schemas/selection.schema';
import { TileSchema } from './schemas/tile.schema';

export const selectionsProvider = [
  {
    provide: SELECTION_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Selection', SelectionSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: TILE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Tile', TileSchema),
    inject: [DATABASE_CONNECTION],
  },
];
