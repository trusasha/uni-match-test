import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Summary } from './components/summary';
import { Information } from './components/information';

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
};

export const Content = () => {
  return (
    <View>
      <Summary summary={MOCK_USER.summary} additionalStyles={styles.mb14} />
      <View style={styles.row}>
        <View>
          <Information
            generalInformation={MOCK_USER.generalInformation}
            tags={MOCK_USER.userTags as UserTag[]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mb14: {
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});
