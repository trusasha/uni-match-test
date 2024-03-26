import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  companyName: string;
  companyLocation: string;
  logo: string;
}

export const Company: FC<Props> = ({ companyLocation, companyName, logo }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} src={logo} />
      <View>
        <Text style={styles.name}>{companyName}</Text>
        <Text style={styles.location}>{companyLocation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 68,
    height: 68,
    marginRight: 8,
    borderRadius: 14,
  },
  name: {
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.neutralLight,
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.neutralGray,
  },
});
