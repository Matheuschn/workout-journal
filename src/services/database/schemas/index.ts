import { ExerciseSchema } from './exercise';
import { PlanSchema } from './plan';
import { PreferencesSchema } from './preferences';
import { SetSchema } from './set';
import { WorkoutSchema } from './workout';

const SchemaArray = [
  ExerciseSchema,
  WorkoutSchema,
  PlanSchema,
  PreferencesSchema,
  SetSchema,
];

export default SchemaArray;
