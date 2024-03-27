import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeartIcon from 'assets/screens/feed/card-inner/heart.svg';
import { NavigationHelpers, useNavigation } from '@react-navigation/native';
import { ScreenParams } from 'navigation/constants/types';
import { SCREENS } from 'navigation/constants/screens';

interface Props {
  id: string;
  savedCount: string;
}

export const SavedIndicator: FC<Props> = ({ id, savedCount }) => {
  const {navigate} = useNavigation<NavigationHelpers<ScreenParams>>()

  const onSaved = () => navigate(SCREENS.WHO_SAVED, {id})

  return (
    <View style={styles.container}>
      <HeartIcon style={styles.icon} width={24} height={24} />
      <TouchableOpacity onPress={onSaved} activeOpacity={0.7} style={styles.savedContainer}>
        <Text style={styles.savedText}>{savedCount} saved it</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  icon: {
    marginBottom: 13,
  },
  savedText: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.neutralLight,
  },
  savedContainer: {
    marginRight: -13,
    paddingVertical: 10,
    paddingRight: 9,
    paddingLeft: 17,
    backgroundColor: COLORS.blackLight,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,

    shadowColor: COLORS.blackLight,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,

    elevation: 11,
  },
});
