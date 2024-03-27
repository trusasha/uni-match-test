import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { BottomSheetProps, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
// eslint-disable-next-line import/no-extraneous-dependencies
import GorhomBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

interface Props extends BottomSheetProps {}

export const BottomSheet: FC<Props> = ({ ...rest }) => {
  return (
    <GorhomBottomSheet
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.indicator}
      {...rest}
    />
  );
};

const renderBackdrop: FC<BottomSheetBackdropProps> = props => (
  <BottomSheetBackdrop {...props} style={styles.backdrop} disappearsOnIndex={-1} appearsOnIndex={0} />
);

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
  backdrop: {
    backgroundColor: 'rgba(136, 136, 136, 0.8)',
  },
});
