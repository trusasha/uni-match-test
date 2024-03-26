import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  summary: UserProfile['summary'];
  additionalStyles?: ViewProps['style'];
}

export const Summary: FC<Props> = ({ summary, additionalStyles }) => {
  return (
    <View style={[styles.container, additionalStyles]}>
      {summary.map(({ id, label, value }) => (
        <View key={id} style={styles.itemContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.neutral,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: COLORS.neutralLight,
    marginBottom: 5,
  },
});
