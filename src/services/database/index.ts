import Realm from 'realm';
import { Exercise, Plan } from '../../types';
import SchemaArray from './schemas';
import { ExerciseSchema } from './schemas/exercise';
import { PlanSchema } from './schemas/plan';

Realm.copyBundledRealmFiles();

const realm = new Realm({
  schema: SchemaArray,
});

export const Database = {
  instance: realm,

  getExercises: (): Exercise[] => realm.objects(ExerciseSchema.name).toJSON(),

  createPlan: (plan: Plan): Plan =>
    realm.write(() => realm.create(PlanSchema.name, plan)).toJSON(),

  getPlans: (): Plan[] => realm.objects(PlanSchema.name).toJSON(),

  getActivePlan: (): Plan | undefined =>
    realm.objects(PlanSchema.name).filtered('active == true').toJSON()[0],
};
