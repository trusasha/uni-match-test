/* eslint-disable import/no-extraneous-dependencies */
import { ResizeMode, Video } from 'expo-av';
import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  videoUrl: string;
}

export interface BackgroundVideoMethods {
  play: () => void;
  pause: () => void;
}

export const BackgroundVideo = memo(
  forwardRef<BackgroundVideoMethods, Props>(({ videoUrl }, ref) => {
    const video = useRef<Video>(null);

    useImperativeHandle(ref, () => ({
      play: () => video.current?.playAsync().catch(console.log),
      pause: () => video.current?.pauseAsync().catch(console.log),
    }));

    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoUrl,
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
        />
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    zIndex: -1,
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});
