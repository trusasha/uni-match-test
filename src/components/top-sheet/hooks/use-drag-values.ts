import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Config {
  height: number;
  isOpen: boolean;
  onClose: () => void;
}

export const useDragValues = ({ height, isOpen, onClose }: Config) => {
  const { top } = useSafeAreaInsets();

  const summaryHeight = height + top;

  const offset = useSharedValue(-summaryHeight);

  const pan = Gesture.Pan()
    .onChange(event => {
      const offsetDelta = event.changeY + offset.value;

      offset.value = Math.min(offsetDelta, -summaryHeight + 20);
    })
    .onFinalize(() => {
      if (offset.value > -summaryHeight / 3) {
        offset.value = withTiming(-3 * summaryHeight, {}, () => {
          runOnJS(() => {
            onClose();

            if (isOpen) {
              offset.value = withTiming(0);
            } else {
              offset.value = -height;
            }
          })();
        });
      } else if (offset.value / 2 < -summaryHeight) {
        offset.value = withTiming(-3 * summaryHeight, {}, () => {
          runOnJS(onClose)();
        });
      } else {
        offset.value = withSpring(-summaryHeight);
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: summaryHeight + offset.value }],
  }));

  return { pan, translateY, summaryHeight };
};
