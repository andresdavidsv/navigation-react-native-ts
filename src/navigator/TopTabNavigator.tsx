import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { Text } from 'react-native';
import { colors } from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      screenOptions={({ route }) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'C';
              break;

            case 'ContactsScreen':
              iconName = 'C';
              break;

            case 'AlbumsScreen':
              iconName = 'A';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
