import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SwipableStackList } from './components/swipable-stack-list';

const COLORS = ['red', 'blue', 'green', 'yellow', 'pink'];

export const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SwipableStackList colors={COLORS}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242831',
  },
});
