import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { BottomSheetProps } from '@gorhom/bottom-sheet';
// eslint-disable-next-line import/no-extraneous-dependencies
import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

interface Props extends BottomSheetProps {}

export const BottomSheet: FC<Props> = ({ ...rest }) => {
  return (
    <GorhomBottomSheet
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.indicator}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    borderTopRightRadius: 24,
    borderTopStartRadius: 24,
  },
  indicator: {
    backgroundColor: 'rgba(56, 56, 56, 1)',
    width: 40,
    height: 4,
    borderRadius: 4,
  },
});
