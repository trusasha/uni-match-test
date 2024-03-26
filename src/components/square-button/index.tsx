import { COLORS } from 'constants/colors';

import { ScaleButton } from 'components/scale-button';
import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';

interface Props {
  icon: JSX.Element;
  additionalStyles?: ViewProps['style'];
}

export const SquareButton: FC<Props> = ({ icon, additionalStyles }) => {
  return <ScaleButton style={[styles.container, additionalStyles]}>{icon}</ScaleButton>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blackLight,
    width: 57,
    height: 57,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#272727',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,

    elevation: 11,
  },
});
