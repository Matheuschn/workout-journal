import { ObjectSchema } from 'realm';

export const PlanSchema: ObjectSchema = {
  name: 'Plan',
  properties: {
    name: 'string',
    normalized_name: 'string',
    workouts: 'Workout[]',
    active: 'bool',
  },
  primaryKey: 'normalized_name',
};
