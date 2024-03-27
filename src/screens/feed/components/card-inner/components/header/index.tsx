import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LinearGradient } from 'expo-linear-gradient';

import { MatchingCircle } from './components/matching-circle';
import { SavedIndicator } from './components/saved-indicator';

interface Props {
  isPlaying: SharedValue<boolean>;
  matching: number;
  savedCount: string;
  id: string;
}

export const Header: FC<Props> = ({ isPlaying, matching, savedCount, id }) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(isPlaying.value ? -200 : 0, { duration: 800 }) }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <MatchingCircle value={matching} label="matching" />
      <SavedIndicator savedCount={savedCount} id={id} />
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
        locations={[0.3, 1]}
        style={styles.gradient}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    marginTop: -50,
    zIndex: -1,
  },
});
