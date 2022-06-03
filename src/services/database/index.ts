import 'react-native-get-random-values';
import { Realm, createRealmContext } from '@realm/react';
import { Exercise, Plan, Preferences, ThemeName, Units } from '../../types';
import SchemaArray from './schemas';
import { ExerciseSchema } from './schemas/exercise';
import { PlanSchema } from './schemas/plan';
import { PreferencesSchema } from './schemas/preferences';
import {
  findBestAvailableLanguage,
  usesMetricSystem,
} from 'react-native-localize';
import { languages } from '../translation/languages';

Realm.copyBundledRealmFiles();

const realmConfig = {
  schema: SchemaArray,
};

const realm = new Realm(realmConfig);

const defaultPreferences: Preferences = {
  id: new Realm.BSON.UUID(),
  language:
    findBestAvailableLanguage(languages.tags)?.languageTag || languages.default,
  theme: ThemeName.AUTO,
  units: usesMetricSystem() ? Units.METRIC : Units.IMPERIAL,
};

export const Database = {
  context: createRealmContext(realmConfig),

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

  addPreferencesListener: (listener: (preferences: Preferences) => void) =>
    realm
      .objects(PreferencesSchema.name)[0]
      .addListener((obj) => listener(obj.toJSON())),
};
