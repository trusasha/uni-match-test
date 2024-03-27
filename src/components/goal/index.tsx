import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  goal: string | string[];
  additionalStyles?: ViewProps['style'];
}

export const Goal: FC<Props> = ({ goal, additionalStyles }) => {
  if (Array.isArray(goal)) {
    return (
      <ScrollView
        style={[styles.row, additionalStyles]}
        contentContainerStyle={styles.rowContent}
        horizontal
      >
        {goal.map(item => (
          <Goal goal={item} key={item} additionalStyles={styles.rowItem} />
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, additionalStyles]}>
      <Text style={styles.label}>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutral,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.neutralLight,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: -14,
  },
  rowContent: {
    paddingHorizontal: 14,
  },
  rowItem: {
    marginRight: 8,
  },
});
