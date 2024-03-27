import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { USER_PROFILES } from 'mock/user-profiles';

import { SwipableStackList } from './components/swipable-stack-list';

export const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SwipableStackList userProfiles={USER_PROFILES} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242831',
  },
});
