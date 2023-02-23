import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import { SettingScreen } from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export const MenuSideBasic = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingScreen"
        options={{ title: 'Settings' }}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};
