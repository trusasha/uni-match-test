import { COLORS } from 'constants/colors';

import type { FC } from 'react';
import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export enum UserTag {
  web3 = 'web3',
  blockchain = 'blockchain',
  ai = 'ai',
  medtech = 'medtech',
  fintech = 'fintech',
}

interface Props {
  tag: UserTag | UserTag[];
  additionalStyles?: ViewProps['style'];
}

export const Tag: FC<Props> = ({ tag, additionalStyles }) => {
  if (Array.isArray(tag)) {
    return (
      <View style={[styles.row, additionalStyles]}>
        {tag.map(item => (
          <Tag tag={item} additionalStyles={styles.rowItem} />
        ))}
      </View>
    );
  }

  return (
    <View style={[styles.container, additionalStyles]}>
      <Text style={styles.label}>{getLabelByType(tag)}</Text>
    </View>
  );
};

const getLabelByType = (type: UserTag) => {
  switch (type) {
    case UserTag.ai:
      return 'AI';
    case UserTag.blockchain:
      return 'Blockchain';
    case UserTag.fintech:
      return 'FinTech';
    case UserTag.web3:
      return 'WEB3';
    case UserTag.medtech:
      return 'MedTech';
    default:
      return '';
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.neutral,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.neutralLight,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rowItem: {
    marginRight: 8,
  },
});
