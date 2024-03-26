import { COLORS } from 'constants/colors';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from './components/header';
import { Content } from './components/content';

export const CardInner = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.neutral,
  },
});
