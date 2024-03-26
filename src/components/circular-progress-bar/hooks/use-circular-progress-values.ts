import { COLORS } from 'constants/colors';

import {
  PaintStyle,
  Skia,
  StrokeCap,
  TileMode,
  useComputedValue,
  vec,
} from '@shopify/react-native-skia';

interface Config {
  size: number;
  progress: number;
  strokeWidth: number;
  backgroundStrokeWidth: number;
}

export const useCircularProgressValues = ({
  size,
  progress,
  strokeWidth,
  backgroundStrokeWidth,
}: Config) => {
  const backgroundPath = Skia.Path.Make();
  backgroundPath.addArc(
    {
      x: backgroundStrokeWidth / 2,
      y: backgroundStrokeWidth / 2,
      width: size - backgroundStrokeWidth,
      height: size - backgroundStrokeWidth,
    },
    0,
    360,
  );

  const progressPath = useComputedValue(() => {
    const p = Skia.Path.Make();
    const startAngle = -90 - 20;
    const sweepAngle = 360 * progress;
    p.addArc(
      {
        x: backgroundStrokeWidth / 2,
        y: backgroundStrokeWidth / 2,
        width: size - backgroundStrokeWidth,
        height: size - backgroundStrokeWidth,
      },
      startAngle,
      sweepAngle,
    );
    return p;
  }, [progress]);

  const paint = Skia.Paint();
  const colors = [Skia.Color(COLORS.primary), Skia.Color(COLORS.blueLight)];
  const gradient = Skia.Shader.MakeLinearGradient(
    vec(0, 0),
    vec(size, 0),
    colors,
    [0, 0.5, 1],
    TileMode.Clamp,
  );

  paint.setShader(gradient);
  paint.setStrokeCap(StrokeCap.Round);
  paint.setStyle(PaintStyle.Stroke);
  paint.setAntiAlias(true);
  paint.setStrokeWidth(strokeWidth);

  const textPaint = Skia.Paint();
  textPaint.setAntiAlias(true);
  textPaint.setColor(Skia.Color(COLORS.white));

  return { backgroundPath, progressPath, paint, textPaint };
};
