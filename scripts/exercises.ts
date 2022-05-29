import fs from 'fs';
import { execSync } from 'child_process';

const directoryPath = 'plugins/exercises.json';
const filePath = `${directoryPath}/exercises.json`;

export const deleteExercises = () => {
  if (fs.existsSync(filePath)) {
    console.log('Deleting exercises file...');
    fs.unlinkSync(filePath);
  } else {
    console.log('Exercises file does not exist.');
  }
};

export const buildExercises = () => {
  if (!fs.existsSync(filePath)) {
    console.log('Building exercises file...');
    execSync('npm run build:json', { cwd: directoryPath });
  } else {
    console.log('Exercises file already exists.');
  }
};

//  If called directly with ts-node
if (require.main === module) {
  const operation = process.argv[2];
  if (operation === 'build') {
    buildExercises();
    console.log('Finished!');
  } else if (operation === 'delete') {
    deleteExercises();
    console.log('Finished!');
  } else {
    console.error('usage: ts-node exercises.ts (<build> | <delete>)');
    process.exitCode = 1;
  }
}
