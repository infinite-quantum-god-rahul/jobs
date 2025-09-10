import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

import { store, persistor } from './store';
import AppNavigator from './navigation/AppNavigator';
import ErrorBoundary from './services/ErrorBoundary';
import Logger from './utils/Logger';

Logger.info('App starting...');

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ErrorBoundary>
            <View style={styles.container}>
              <AppNavigator />
              <StatusBar style="auto" />
            </View>
          </ErrorBoundary>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
