import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import type { SharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import { useSwipeCardAnimation } from './hooks/use-swipe-card-animation';

type Props = {
  index: number;
  activeIndex: SharedValue<number>;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
};

const SwipeableCard: FC<PropsWithChildren<Props>> = ({
  index,
  activeIndex,
  onSwipeLeft,
  onSwipeRight,
  children,
}) => {
  const { gesture, animatedCardContainerStyle, animatedCardStyle } = useSwipeCardAnimation({
    index,
    activeIndex,
    onSwipeLeft,
    onSwipeRight,
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, { zIndex: -index }, animatedCardContainerStyle]}>
        <Animated.View style={[styles.content, animatedCardStyle]}>{children}</Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '75%',
    width: '90%',
    borderRadius: 20,
  },
  content: {
    borderRadius: 15,
    overflow: 'hidden',
    flex: 1,
  },
});

export { SwipeableCard };
