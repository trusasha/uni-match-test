import { COLORS } from 'constants/colors';

import { CircularProgress } from 'components/circular-progress-bar';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  value: number;
  label: string;
}

export const MatchingCircle: FC<Props> = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <CircularProgress progress={value} size={52} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    lineHeight: 19,
    color: COLORS.neutralLight,
  },
});
