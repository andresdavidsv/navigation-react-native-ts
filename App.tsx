import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuSideBasic } from './src/navigator/MenuSideBasic';
import { MenuSide } from './src/navigator/MenuSide';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuSideBasic /> */}
      <MenuSide />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
