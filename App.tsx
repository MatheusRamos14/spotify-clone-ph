import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { Login } from './src/screens/Login';
import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
