import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainStack } from 'navigation/main-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.flex}>
          <MainStack />
          <StatusBar style="light" />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

// eslint-disable-next-line import/no-default-export
export default App;
