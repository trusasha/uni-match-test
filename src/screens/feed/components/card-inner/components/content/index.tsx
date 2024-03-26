import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Summary } from './components/summary';

const MOCK: { label: string; value: string; id: string }[] = [
  { label: 'Ready to invest', value: '$300 k', id: '0' },
  { label: 'Exits', value: '17', id: '1' },
  { label: 'This year', value: '6 deals', id: '2' },
  { label: 'This year invest.', value: '$7 k', id: '3' },
];

export const Content = () => {
  return (
    <View>
      <Summary summary={MOCK} additionalStyles={styles.mb14} />
    </View>
  );
};

const styles = StyleSheet.create({
  mb14: {
    marginBottom: 14,
  },
});
