import { COLORS } from 'constants/colors';

import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import type { SharedValue } from 'react-native-reanimated';
import {
  Extrapolation,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface Config {
  index: number;
  activeIndex: SharedValue<number>;
  onSwipeRight(): void;
  onSwipeLeft(): void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const INPUT_RANGE = [-SCREEN_WIDTH / 3, 0, SCREEN_WIDTH / 3];
const MAX_CARD_TRANSLATION = SCREEN_WIDTH * 1.5;

export const useSwipeCardAnimation = ({ index, activeIndex, onSwipeLeft, onSwipeRight }: Config) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const currentActiveIndex = useSharedValue(Math.floor(activeIndex.value));
  const nextActiveIndex = useSharedValue(Math.floor(activeIndex.value));

  const rotate = useDerivedValue(() => {
    return interpolate(
      translateX.value,
      INPUT_RANGE,
      [-Math.PI / 20, 0, Math.PI / 20],
      Extrapolation.CLAMP,
    );
  }, [INPUT_RANGE]);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      currentActiveIndex.value = Math.floor(activeIndex.value);
    })
    .onUpdate(event => {
      if (currentActiveIndex.value !== index) return;
      translateX.value = event.translationX;
      translateY.value = event.translationY;

      nextActiveIndex.value = interpolate(
        translateX.value,
        INPUT_RANGE,
        [currentActiveIndex.value + 1, currentActiveIndex.value, currentActiveIndex.value + 1],
        Extrapolation.CLAMP,
      );
    })
    .onFinalize(event => {
      if (currentActiveIndex.value !== index) return;

      if (nextActiveIndex.value === activeIndex.value + 1) {
        const sign = Math.sign(event.translationX);

        if (sign === 1) {
          runOnJS(onSwipeRight)();

          translateX.value = withSpring(MAX_CARD_TRANSLATION);
          activeIndex.value += 1;
        } else {
          runOnJS(onSwipeLeft)();

          translateX.value = withSpring(-MAX_CARD_TRANSLATION);
          activeIndex.value += 1;
        }
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedCardContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(index - activeIndex.value < 5 ? 1 : 0);
    const transY = withTiming((index - activeIndex.value) * 23);
    const scale = withTiming(1 - 0.07 * (index - activeIndex.value));

    return {
      opacity,
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: transY },
        { scale },
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const animatedCardStyle = useAnimatedStyle(() => ({
    borderWidth: interpolate(translateX.value, [-100, 0, 100], [4, 0, 4]),
    borderColor: interpolateColor(
      translateX.value,
      [-100, 0, 100],
      [COLORS.lightRed, 'rgba(0,0,0,0)', COLORS.primary],
    ),
  }));

  return { gesture, animatedCardContainerStyle, animatedCardStyle };
};
