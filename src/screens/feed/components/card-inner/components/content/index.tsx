import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Summary } from './components/summary';
import { Information } from './components/information';
import { Company } from './components/company';

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
};

export const Content = () => {
  const { summary, generalInformation, userTags, company } = MOCK_USER;

  return (
    <View>
      <Summary summary={summary} additionalStyles={styles.mb14} />
      <View style={styles.row}>
        <View>
          <Information
            generalInformation={generalInformation}
            tags={userTags as UserTag[]}
            additionalStyles={styles.mb20}
          />
          <Company companyLocation={company.location} companyName={company.name} logo={company.logo} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mb14: {
    marginBottom: 14,
  },
  mb20: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});
