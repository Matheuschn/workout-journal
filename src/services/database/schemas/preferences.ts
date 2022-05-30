import { ObjectSchema } from 'realm';

export const PreferencesSchema: ObjectSchema = {
  name: 'Preferences',
  properties: {
    id: 'uuid',
    language: 'string',
    theme: 'string',
    units: 'string',
  },
  primaryKey: 'id',
};
