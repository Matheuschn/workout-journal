export enum Muscle {
  abdominals = 'abdominals',
  hamstrings = 'hamstrings',
  calves = 'calves',
  shoulders = 'shoulders',
  adductors = 'adductors',
  glutes = 'glutes',
  quadriceps = 'quadriceps',
  biceps = 'biceps',
  forearms = 'forearms',
  abductors = 'abductors',
  triceps = 'triceps',
  chest = 'chest',
  lower_back = 'lower back',
  traps = 'traps',
  middle_back = 'middle back',
  lats = 'lats',
  neck = 'neck',
}

export enum Force {
  pull = 'pull',
  push = 'push',
  static = 'static',
}

export enum Level {
  beginner = 'beginner',
  intermediate = 'intermediate',
  expert = 'expert',
}

export enum Mechanic {
  compound = 'compound',
  isolation = 'isolation',
}

export enum Equipment {
  body = 'body only',
  machine = 'machine',
  kettlebells = 'kettlebells',
  dumbbell = 'dumbbell',
  cable = 'cable',
  barbell = 'barbell',
  bands = 'bands',
  medicine_ball = 'medicine ball',
  exercise_ball = 'exercise ball',
  e_z_curl_bar = 'e-z curl bar',
  foam_roll = 'foam roll',
}

export enum Category {
  strength = 'strength',
  stretching = 'stretching',
  plyometrics = 'plyometrics',
  strongman = 'strongman',
  powerlifting = 'powerlifting',
  cardio = 'cardio',
  olympic_weightlifting = 'olympic weightlifting',
  crossfit = 'crossfit',
  weighted_bodyweight = 'weighted bodyweight',
  assisted_bodyweight = 'assisted bodyweight',
}

export interface Exercise {
  name: string;
  normalized_name: string;
  primaryMuscles: Muscle[];
  secondaryMuscles: Muscle[];
  force: Force | null;
  level: Level | null;
  mechanic: Mechanic | null;
  equipment: Equipment | null;
  category: Category | null;
  instructions: string[];
}

export interface Plan {
  name: string;
  normalized_name: string;
  workouts: Workout[];
  active: boolean;
}

export interface Workout {
  name: string;
  normalized_name: string;
  exercises: Exercise[];
}

export enum ThemeName {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto',
}

export enum Units {
  IMPERIAL = 'imperial',
  METRIC = 'metric',
}

export enum Language {
  ENGLISH = 'english',
}

export interface Preferences {
  id: Realm.BSON.UUID;
  language: Language;
  theme: ThemeName;
  units: Units;
}
