import 'react-native-get-random-values';
import Realm from 'realm';
import {
  Exercise,
  Language,
  Plan,
  Preferences,
  ThemeName,
  Units,
} from '../../types';
import SchemaArray from './schemas';
import { ExerciseSchema } from './schemas/exercise';
import { PlanSchema } from './schemas/plan';
import { PreferencesSchema } from './schemas/preferences';

Realm.copyBundledRealmFiles();

const realm = new Realm({
  schema: SchemaArray,
});

const defaultPreferences: Preferences = {
  id: new Realm.BSON.UUID(),
  language: Language.ENGLISH,
  theme: ThemeName.AUTO,
  units: Units.METRIC,
};

export const Database = {
  instance: realm,

  getExercises: (): Exercise[] => realm.objects(ExerciseSchema.name).toJSON(),

  createPlan: (plan: Plan): Plan =>
    realm.write(() => realm.create(PlanSchema.name, plan)).toJSON(),

  getPlans: (): Plan[] => realm.objects(PlanSchema.name).toJSON(),

  getActivePlan: (): Plan | undefined =>
    realm.objects(PlanSchema.name).filtered('active == true').toJSON()[0],

  setPreferences: (preferences: Preferences) =>
    realm.write(() =>
      realm.create(PreferencesSchema.name, preferences, Realm.UpdateMode.All),
    ),

  createDefaultPreferences: () => Database.setPreferences(defaultPreferences),

  getPreferences: (): Preferences => {
    let preferences = realm.objects(PreferencesSchema.name).toJSON()[0];
    if (!preferences) {
      Database.createDefaultPreferences();
      preferences = defaultPreferences;
    }

    return preferences;
  },

  addPreferencesListener: (
    listener: Realm.ObjectChangeCallback<Realm.Object>,
  ) => realm.objects(PreferencesSchema.name)[0].addListener(listener),
};
