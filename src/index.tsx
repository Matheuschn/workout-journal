import React from 'react';
import Routes from './routes';
import { Database } from './services/database';

const { RealmProvider } = Database.context;

const App = () => (
  <RealmProvider>
    <Routes />
  </RealmProvider>
);

export default App;
