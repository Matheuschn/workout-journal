import { ObjectSchema } from 'realm';

export const WorkoutSchema: ObjectSchema = {
  name: 'Workout',
  properties: {
    name: 'string',
    normalized_name: 'string',
    exercises: 'Exercise[]',
  },
  primaryKey: 'normalized_name',
};
