import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Summary } from './components/summary';
import { Information } from './components/information';
import { Company } from './components/company';
import { AsideButtons } from './components/aside-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { SharedValue, SlideInDown, SlideOutDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface Props {
  userProfile: UserProfile;
  isPlaying: SharedValue<boolean>;
}

export const Content: FC<Props> = ({userProfile: { summary, generalInformation, userTags, company }, isPlaying}) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(isPlaying.value ? 350 : 0, {duration: 800})}]
  }))

  return (
    <Animated.View entering={SlideInDown.duration(800)} exiting={SlideOutDown.duration(800)} style={animatedStyles} key="content">
      <Summary summary={summary} additionalStyles={styles.mb14} />
      <View style={styles.row}>
        <View style={styles.leftContent}>
          <Information
            generalInformation={generalInformation}
            tags={userTags as UserTag[]}
            additionalStyles={styles.information}
          />
          <Company companyLocation={company.location} companyName={company.name} logo={company.logo} />
        </View>
        <AsideButtons />
      </View>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
        locations={[0, 0.4, 1]}
        style={styles.gradient}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mb14: {
    marginBottom: 14,
  },
  information: {
    marginRight: 20,
    marginBottom: 20,
  },
  leftContent: {
    flexShrink: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    marginTop: -50,
    zIndex: -1,
  },
});
