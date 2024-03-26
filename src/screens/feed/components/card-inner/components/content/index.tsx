import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Summary } from './components/summary';
import { Information } from './components/information';
import { Company } from './components/company';
import { AsideButtons } from './components/aside-buttons';

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
    </View>
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
});
