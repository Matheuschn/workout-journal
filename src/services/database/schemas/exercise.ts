import { ObjectSchema } from 'realm';

export const ExerciseSchema: ObjectSchema = {
  name: 'Exercise',
  properties: {
    id: 'uuid',
    name: 'string',
    normalized_name: 'string',
    primaryMuscles: 'string[]',
    secondaryMuscles: 'string[]',
    force: 'string?',
    level: 'string?',
    mechanic: 'string?',
    equipment: 'string?',
    category: 'string?',
    instructions: 'string[]',
    sets: 'Set[]',
    notes: 'string?',
  },
  primaryKey: 'id',
};
