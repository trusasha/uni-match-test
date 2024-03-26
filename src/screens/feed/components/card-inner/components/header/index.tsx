import type { FC } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MatchingCircle } from './components/matching-circle';
import { SavedIndicator } from './components/saved-indicator';

interface Props {
  matching: number;
  savedCount: string;
}

export const Header: FC<Props> = ({ matching, savedCount }) => {
  return (
    <View style={styles.container}>
      <MatchingCircle value={matching} label="matching" />
      <SavedIndicator savedCount={savedCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
