import Realm from 'realm';
import { exercises } from '../plugins/exercises.json/exercises.json';
import SchemaArray from '../src/services/database/schemas';
import { buildExercises } from './exercises';
import { encode } from 'iconv-lite';

const config: Realm.Configuration = {
  schema: SchemaArray,
  path: './android/app/src/main/assets/default.realm',
};

const deleteRealm = () => {
  console.log('Deleting Realm file if it exists...');
  Realm.deleteFile(config);
};

const createRealm = async () => {
  buildExercises();
  deleteRealm();

  console.log('Creating new Realm file...');
  const realm = await Realm.open(config);

  console.log('Creating exercises...');
  realm.write(() =>
    exercises.forEach((exercise) =>
      realm.create('Exercise', {
        ...exercise,
        //  Some JSON files have corrupted encodings on the instructions array.
        //  The code below interprets each instruction as a Windows-125x encoded string
        //  and then converts the resulting buffer to an UTF-8 string.
        instructions: exercise.instructions.map((instruction) =>
          encode(instruction, 'win1252').toString('utf8'),
        ),
        normalized_name: exercise.name
          .toLowerCase()
          .replace(/[ /]/g, '_')
          .replace(/[^a-z0-9_]/g, '')
          .replace(/(_)\1{1,}/g, '_'),
        id: new Realm.BSON.UUID(),
        sets: [],
        notes: '',
      }),
    ),
  );

  realm.close();
};

const operation = process.argv[2];
if (operation === 'create') {
  createRealm().then(() => console.log('Finished!'));
} else if (operation === 'delete') {
  deleteRealm();
  console.log('Finished!');
} else {
  console.error('usage: ts-node realm.ts (<create> | <delete>)');
  process.exitCode = 1;
}
