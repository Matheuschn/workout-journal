import { ExerciseSchema } from './exercise';
import { PlanSchema } from './plan';
import { PreferencesSchema } from './preferences';
import { WorkoutSchema } from './workout';

const SchemaArray = [
  ExerciseSchema,
  WorkoutSchema,
  PlanSchema,
  PreferencesSchema,
];

export default SchemaArray;
