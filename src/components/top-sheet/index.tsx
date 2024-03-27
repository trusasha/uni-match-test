import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';
import type { ViewProps } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, SlideInUp, SlideOutUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDragValues } from './hooks/use-drag-values';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const OVERDRAG = 20;

interface Props {
  height: number;
  bottomSheetStyles?: ViewProps['style'];
  onClose?: () => void;
}

export const TopSheet: FC<PropsWithChildren<Props>> = ({
  height,
  children,
  bottomSheetStyles,
  onClose,
}) => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(!isOpen);
    onClose?.();
  };

  const { pan, translateY, summaryHeight } = useDragValues({
    height,
    isOpen,
    onClose: handleClose,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <AnimatedPressable
        style={styles.backdrop}
        entering={FadeIn}
        exiting={FadeOut}
        onPress={handleClose}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, { height: summaryHeight }, bottomSheetStyles, translateY]}
          entering={SlideInUp.springify().damping(20)}
          exiting={SlideOutUp}
        >
          <SafeAreaView edges={['top']}>{children}</SafeAreaView>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    position: 'absolute',
    top: -OVERDRAG * 1.1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    zIndex: 12,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(136, 136, 136, 0.8)',
    zIndex: -1,
  },
});
