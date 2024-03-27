import { COLORS } from 'constants/colors';

import { useNavigation, useRoute } from '@react-navigation/native';
import { TopSheet } from 'components/top-sheet';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeartIcon from 'assets/screens/feed/card-inner/heart.svg';
import { RouteParams } from 'navigation/constants/types';

const MOCK_COMPANIES: UserProfile['company'][] = [
  { name: 'Splinterlands', location: 'L', logo: 'https://via.placeholder.com/600/56acb2' },
  { name: 'Hiro Systems', location: 'L', logo: 'https://via.placeholder.com/600/8985dc' },
  { name: '21Shares', location: 'L', logo: 'https://via.placeholder.com/600/1fe46f' },
  { name: 'Unstoppable Finance', location: 'L', logo: 'https://via.placeholder.com/600/9c184f' },
  { name: 'Fund name', location: 'L', logo: 'https://via.placeholder.com/600/fdf73e' },
];

const getSavedCompanies = (id: UserProfile['id']) =>
  new Promise<UserProfile['company'][]>(res => {
    setTimeout(() => {
      res(MOCK_COMPANIES);
    }, 1000);
  });

export const WhoSaved = () => {
  const { goBack } = useNavigation();

  const {params} = useRoute<RouteParams<'WHO_SAVED'>>()

  const id = params?.id

  const [companies, setCompanies] = useState<UserProfile['company'][]>([]);

  useEffect(() => {
    if (id) {
      getSavedCompanies(id).then(setCompanies).catch()
    }
  }, [])

  const renderCompany = (item: UserCompany) => {
    return <View key={item.logo} />
  }

  return (
    <>
      <TopSheet onClose={goBack} height={100} bottomSheetStyles={styles.sheet}>
        <View style={styles.row}>
          <HeartIcon style={styles.mr12} width={24} height={24} />
          <Text style={styles.text}>Who saved it (69)</Text>
        </View>
        <ScrollView>
          {companies?.map(renderCompany)}
        </ScrollView>
      </TopSheet>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingTop: 8,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
    color: COLORS.neutralLight,
  },
  mr12: {
    marginRight: 12,
  },
  sheet: {
    backgroundColor: COLORS.black,
    borderBottomRightRadius: 0,
  },
});
