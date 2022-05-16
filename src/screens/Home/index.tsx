import React from 'react';
import { View } from 'react-native';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
  return <View></View>;
};

export default Home;
