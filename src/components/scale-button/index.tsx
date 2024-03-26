import React from 'react';
import type { ViewProps } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends ViewProps {
  onTap?: () => void;
}

const ScaleButton: React.FC<Props> = ({ onTap, style, children, ...rest }) => {
  const scale = useSharedValue(1);

  const onTapWrapper = () => onTap?.();

  const gesture = Gesture.Tap()
    .onTouchesDown(() => {
      scale.value = withTiming(0.8);
    })
    .onTouchesUp(() => {
      runOnJS(onTapWrapper)();
    })
    .onFinalize(() => {
      scale.value = withTiming(1);
    });

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [],
  );

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View {...rest} style={[style, animatedStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export { ScaleButton };
