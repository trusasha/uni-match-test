import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { UserTag } from 'components/tag';

import { Summary } from './components/summary';
import { Information } from './components/information';
import { Company } from './components/company';
import { AsideButtons } from './components/aside-buttons';

interface Props {
  userProfile: UserProfile;
}

export const Content: FC<Props> = ({userProfile: { summary, generalInformation, userTags, company }}) => {
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
