import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoot from './src/navigator/main-route';
import { Provider as AuthProvider } from './src/context/auth-context';
import { Provider as LocationProvider } from './src/context/location-context';
import { Provider as TrackProvider } from './src/context/track-context';

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer>
            <MainRoot />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}