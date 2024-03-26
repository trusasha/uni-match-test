import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Header } from './components/header';
import { Content } from './components/content';

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
};

export const CardInner = () => {
  return (
    <View style={styles.container}>
      <Header matching={MOCK_USER.matching} />
      <Content userProfile={MOCK_USER} />
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
