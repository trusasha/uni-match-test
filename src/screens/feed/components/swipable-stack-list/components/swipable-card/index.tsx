import type { FC } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import type { SharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import { useSwipeCardAnimation } from './hooks/use-swipe-card-animation';

type Props = {
  color: string;
  index: number;
  activeIndex: SharedValue<number>;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
};

const SwipeableCard: FC<Props> = ({ color, index, activeIndex, onSwipeLeft, onSwipeRight }) => {
  const { gesture, animatedCardContainerStyle, animatedCardStyle } = useSwipeCardAnimation({
    index,
    activeIndex,
    onSwipeLeft,
    onSwipeRight,
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, { zIndex: -index }, animatedCardContainerStyle]}>
        <Animated.View style={[styles.content, animatedCardStyle]}>
          <View style={[styles.card, { backgroundColor: color }]} />
        </Animated.View>
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
  card: {
    width: '100%',
    height: '100%',
  },
});

export { SwipeableCard };
