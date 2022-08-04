import { ObjectSchema } from 'realm';

export const PlanSchema: ObjectSchema = {
  name: 'Plan',
  properties: {
    id: 'uuid',
    name: 'string',
    workouts: 'Workout[]',
    active: 'bool',
  },
  primaryKey: 'id',
};
