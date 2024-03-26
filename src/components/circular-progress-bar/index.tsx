import type { FC } from 'react';
import React from 'react';
import { Canvas, Path, Text, matchFont } from '@shopify/react-native-skia';
import { Platform } from 'react-native';

import { useCircularProgressValues } from './hooks/use-circular-progress-values';

interface Props {
  progress: number;
  size: number;
  strokeWidth?: number;
  backgroundStrokeWidth?: number;
}

const fontFamily = Platform.select({ ios: 'Helvetica', default: 'serif' });
const fontStyle = {
  fontFamily,
  fontSize: 12,
};
const font = matchFont(fontStyle);

export const CircularProgress: FC<Props> = ({
  progress,
  size,
  strokeWidth = 3,
  backgroundStrokeWidth = 5,
}) => {
  const { progressPath, backgroundPath, paint, textPaint } = useCircularProgressValues({
    size,
    progress,
    strokeWidth,
    backgroundStrokeWidth,
  });

  const text = `${Math.round(progress * 100)}%`;

  const textDimensions = font.measureText(text);

  return (
    <Canvas style={{ width: size, height: size }}>
      <Path path={backgroundPath} color="#121212" style="stroke" strokeWidth={backgroundStrokeWidth} />
      <Path path={progressPath} paint={paint} />
      <Text
        x={(size + backgroundStrokeWidth) / 2 - textDimensions.width / 2}
        y={(size - backgroundStrokeWidth) / 2 + textDimensions.height / 2}
        text={text}
        paint={textPaint}
        font={font}
      />
    </Canvas>
  );
};
