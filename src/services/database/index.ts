import Realm from 'realm';
import { Exercise } from '../../types';
import SchemaArray from './schemas';
import { ExerciseSchema } from './schemas/exercise';

Realm.copyBundledRealmFiles();

const realm = new Realm({
  schema: SchemaArray,
});

export const Database = {
  instance: realm,
  getExercises: (): Exercise[] => realm.objects(ExerciseSchema.name).toJSON(),
};
