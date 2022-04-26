import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, SELECTION_MODEL, TILE_MODEL } from './constants';
import { SelectionSchema } from './schemas/selection.schema';

export const selectionsProvider = [
  {
    provide: SELECTION_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Selection', SelectionSchema),
    inject: [DATABASE_CONNECTION],
  },
];
