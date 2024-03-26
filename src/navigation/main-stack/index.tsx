import React from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feed } from 'screens/feed';
import { Details } from 'screens/details';
import { SCREENS } from 'navigation/constants/screens';

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
};

const modalOptions: NativeStackNavigationOptions = {
  headerShown: false,
  presentation: 'transparentModal',
};

export const MainStack = () => (
  <Stack.Navigator initialRouteName={SCREENS.FEED} screenOptions={options}>
    <Stack.Screen name={SCREENS.FEED} component={Feed} />
    <Stack.Screen name={SCREENS.DETAILS} component={Details} options={modalOptions} />
  </Stack.Navigator>
);
