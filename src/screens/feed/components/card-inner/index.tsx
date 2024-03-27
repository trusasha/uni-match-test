import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';
import { useSharedValue } from 'react-native-reanimated';

import { Header } from './components/header';
import { Content } from './components/content';
import type { BackgroundVideoMethods } from './components/background-video';
import { BackgroundVideo } from './components/background-video';
import { PlayerButton } from './components/player-button';

const MOCK_USER: UserProfile = {
  summary: [
    { label: 'Ready to invest', value: '$300 k', id: '0' },
    { label: 'Exits', value: '17', id: '1' },
    { label: 'This year', value: '6 deals', id: '2' },
    { label: 'This year invest.', value: '$7 k', id: '3' },
  ],
  generalInformation:
    'Fund Future’s venture capital and emerging companies team brings a high level of experience to lorem lorem lorem lorem lorem lorem lorem lorem',
  userTags: [UserTag.web3, UserTag.blockchain],
  company: { name: 'Fund Future', location: 'Inc, US', logo: 'https://via.placeholder.com/150/372c93' },
  matching: 84,
  savedCount: '7k',
  videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
};

export const CardInner = () => {
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
      <Header isPlaying={isPlaying} matching={MOCK_USER.matching} savedCount={MOCK_USER.savedCount} />
      <PlayerButton isPlaying={isPlaying} onToggle={onToggle} />
      <Content isPlaying={isPlaying} userProfile={MOCK_USER} />
      <BackgroundVideo ref={backgroundVideoRef} videoUrl={MOCK_USER.videoUrl} />
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
