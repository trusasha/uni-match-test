import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props extends Omit<TouchableOpacityProps, 'style'> {
  label: string;
  additionalStyles?: TouchableOpacityProps['style'];
}

export const LinkButton: FC<Props> = ({ label, additionalStyles, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} style={additionalStyles}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.blue,
    fontSize: 14,
    lineHeight: 18,
  },
});
