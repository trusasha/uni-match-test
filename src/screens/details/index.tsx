import { useNavigation, useRoute } from '@react-navigation/native';
import { BottomSheet } from 'components/bottom-sheet';
import { CompanyBlock } from 'components/company-block';
import { Goal } from 'components/goal';
import { COLORS } from 'constants/colors';
import { USER_PROFILES } from 'mock/user-profiles';
import { RouteParams } from 'navigation/constants/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const fetchUserProfile = (id: UserProfile['id']) => new Promise<UserProfile>((res, rej) => {
  setTimeout(() => {
    const profile = USER_PROFILES.find((item) => item.id === id)

    if (profile) {
      res(profile)
    } else {
      rej(new Error('not found'))
    }
  }, 300)
})

export const Details = () => {
  const {goBack} = useNavigation()
  const {params} = useRoute<RouteParams<'DETAILS'>>()

  const [profile, setProfile] = useState<UserProfile | null>(null)

  const id = params?.id

  useEffect(() => {
    if (id) {
      fetchUserProfile(id).then(setProfile).catch
    }
  }, [id])

  return (
    <>
      <BottomSheet snapPoints={['60%']} enablePanDownToClose onClose={goBack}>
        {profile && (
          <Animated.View entering={FadeIn} style={styles.content}>
            <CompanyBlock additionalStyles={styles.mb23} companyLocation={profile.company.location} companyName={profile.company.name} logo={profile.company.logo}/>
            <Goal additionalStyles={styles.mb23} goal={profile.goals} />
            <Text style={styles.text}>{profile.generalInformation}</Text>
          </Animated.View>
        )}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  mb23: {
    marginBottom: 23,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.neutral
  },
})