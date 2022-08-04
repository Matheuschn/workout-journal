import { ObjectSchema } from 'realm';

export const WorkoutSchema: ObjectSchema = {
  name: 'Workout',
  properties: {
    id: 'uuid',
    name: 'string',
    exercises: 'Exercise[]',
  },
  primaryKey: 'id',
};
