import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './src/redux';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Information from './src/screens/Information';
import Quiz from './src/screens/Quiz';

// app içinde build.gradle da versiyonu arttırmayı untuma
// cd proje cd android sonra kodlar
// android app içinde keystore olmalı
// çıktısının yolu:projeAdı\android\app\build\outputs\apk\release
// gradlew clean == temizler
// gradlew assemblerelease == apk
// gradlew assembleRelease -x packageReleaseJsAndAssets == apk
// gradlew bundleRelease ==market için çıktı
// react-native run-android --variant=release
// project.ext.react = [
//  enableHermes: false, android/app/build.gradle
// ]

const App = () => {
  const Stack = createNativeStackNavigator();
  const Store = configureStore({ reducer: reducers });

  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash">
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='Information' component={Information} />
            <Stack.Screen name='Quiz' component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;