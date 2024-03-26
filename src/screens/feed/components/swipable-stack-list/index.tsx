import type { FC } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut, useSharedValue } from 'react-native-reanimated';

import { SwipeableCard } from './components/swipable-card';

interface Props {
  colors: string[];
}

export const SwipableStackList: FC<Props> = ({ colors }) => {
  const activeIndex = useSharedValue(0);

  const renderCard = (item: string, index: number) => (
    <SwipeableCard
      key={item}
      index={index}
      activeIndex={activeIndex}
      color={item}
      onSwipeRight={() => {
        console.log('LIKE: ');
      }}
      onSwipeLeft={() => {
        console.log('DISLIKE: ');
      }}
    />
  );

  return (
    <View style={styles.flex}>
      <Animated.View style={styles.content} entering={FadeIn.delay(300)} exiting={FadeOut}>
        {colors.map(renderCard)}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
