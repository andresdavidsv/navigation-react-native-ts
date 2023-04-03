import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuSideBasic } from './src/navigator/MenuSideBasic';
import { MenuSide } from './src/navigator/MenuSide';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuSideBasic /> */}
        <MenuSide />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
