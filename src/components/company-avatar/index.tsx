import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  imageUrl: string;
  additionalStyles?: ViewProps['style'];
}

export const CompanyAvatar: FC<Props> = ({ name, imageUrl, additionalStyles }) => {
  return (
    <View style={[styles.container, additionalStyles]}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text numberOfLines={2} style={styles.text}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    maxWidth: 88,
  },
  image: {
    width: 84,
    height: 84,
    marginBottom: 8,
    borderRadius: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.neutralLight,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
