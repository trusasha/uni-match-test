import type { FC } from 'react';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';
import { useSharedValue } from 'react-native-reanimated';

import { Header } from './components/header';
import { Content } from './components/content';
import type { BackgroundVideoMethods } from './components/background-video';
import { BackgroundVideo } from './components/background-video';
import { PlayerButton } from './components/player-button';

interface Props {
  userProfile: UserProfile;
}

export const CardInner: FC<Props> = ({ userProfile }) => {
  const isPlaying = useSharedValue(false);

  const backgroundVideoRef = useRef<BackgroundVideoMethods>(null);

  const onToggle = () => {
    if (isPlaying.value) {
      backgroundVideoRef.current?.pause();
    } else {
      backgroundVideoRef.current?.play();
    }

    isPlaying.value = !isPlaying.value;
  };

  return (
    <View style={styles.container}>
      <Header
        isPlaying={isPlaying}
        id={userProfile.id}
        matching={userProfile.matching}
        savedCount={userProfile.savedCount}
      />
      <PlayerButton isPlaying={isPlaying} onToggle={onToggle} />
      <Content isPlaying={isPlaying} userProfile={userProfile} />
      <BackgroundVideo ref={backgroundVideoRef} videoUrl={userProfile.videoUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#EC612B',
  },
});
