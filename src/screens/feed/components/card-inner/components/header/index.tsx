import type { FC } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MatchingCircle } from './components/matching-circle';

interface Props {
  matching: number;
}

export const Header: FC<Props> = ({ matching }) => {
  return (
    <View style={styles.container}>
      <MatchingCircle value={matching} label="matching" />
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'space-between',
  },
});
