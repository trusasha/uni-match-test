import { COLORS } from 'constants/colors';

import type { UserTag } from 'components/tag';
import { Tag } from 'components/tag';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinkButton } from 'components/link-button';

interface Props {
  generalInformation: string;
  tags: UserTag[];
}

export const Information: FC<Props> = ({ generalInformation, tags }) => {
  return (
    <View>
      <Text style={styles.text} numberOfLines={3}>
        {generalInformation}
      </Text>
      <LinkButton label="Read more" additionalStyles={styles.mb8} />
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
