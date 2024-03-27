import { BottomSheet } from 'components/bottom-sheet';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const WhoSaved = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <BottomSheet snapPoints={[300]} topInset={top}>
        <View>
          <Text>Who saved it (69)</Text>
        </View>
      </BottomSheet>
    </>
  );
};
