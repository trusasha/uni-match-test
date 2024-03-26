import type { FC } from 'react';
import React from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import PlayIcon from 'assets/screens/feed/card-inner/play.svg';
import { StyleSheet, TouchableOpacity } from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  isPlaying: boolean;
  onToggle: () => void;
}

export const PlayerButton: FC<Props> = ({ isPlaying, onToggle }) => {
  return (
    <AnimatedTouchable
      activeOpacity={0.7}
      key="play-button"
      style={styles.button}
      layout={LinearTransition.duration(800)}
      onPress={onToggle}
    >
      <PlayIcon />
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    backgroundColor: 'rgba(7, 7, 7, 0.5)',
    borderRadius: 100,
    alignSelf: 'center',
  },
});
