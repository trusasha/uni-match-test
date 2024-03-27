import { COLORS } from 'constants/colors';

import type { UserTag } from 'components/tag';
import { Tag } from 'components/tag';
import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { LinkButton } from 'components/link-button';
import { NavigationHelpers, useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigation/constants/screens';
import { ScreenParams } from 'navigation/constants/types';

interface Props {
  id: string;
  generalInformation: string;
  tags: UserTag[];
  additionalStyles?: ViewProps['style'];
}

export const Information: FC<Props> = ({ id, generalInformation, tags, additionalStyles }) => {
  const {navigate} = useNavigation<NavigationHelpers<ScreenParams>>()

  const onLink = () => navigate(SCREENS.DETAILS, {id})

  return (
    <View style={additionalStyles}>
      <Text style={styles.text} numberOfLines={3}>
        {generalInformation}
      </Text>
      <LinkButton onPress={onLink} label="Read more" additionalStyles={styles.mb8} />
      <Tag tag={tags} />
    </View>
  );
};

const styles = StyleSheet.create({
  mb8: {
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.neutralLight,
    marginBottom: 8,
  },
});
