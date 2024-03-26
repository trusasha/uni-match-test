import { SquareButton } from 'components/square-button';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PathIcon from 'assets/screens/feed/card-inner/path.svg';
import InfoIcon from 'assets/screens/feed/card-inner/info.svg';
import CrossIcon from 'assets/screens/feed/card-inner/cross.svg';

export const AsideButtons = () => {
  return (
    <View>
      <SquareButton additionalStyles={styles.mb16} icon={<PathIcon width={24} height={24} />} />
      <SquareButton additionalStyles={styles.mb16} icon={<InfoIcon width={24} height={24} />} />
      <SquareButton additionalStyles={styles.mb16} icon={<CrossIcon width={24} height={24} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  mb16: {
    marginBottom: 16,
  },
});
