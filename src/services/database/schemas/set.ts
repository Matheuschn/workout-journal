import { ObjectSchema } from 'realm';

export const SetSchema: ObjectSchema = {
  name: 'Set',
  properties: {
    id: 'uuid',
    minimum_reps: 'int?',
    maximum_reps: 'int?',
    rest_time: 'int?',
    weight: 'int?',
  },
  primaryKey: 'id',
};
