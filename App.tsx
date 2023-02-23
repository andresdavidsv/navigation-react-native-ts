import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuSideBasic } from './src/navigator/MenuSideBasic';
import { MenuSide } from './src/navigator/MenuSide';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuSideBasic /> */}
      <MenuSide />
    </NavigationContainer>
  );
};

export default App;
