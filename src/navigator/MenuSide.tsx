import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { SettingScreen } from '../screens/SettingScreen';
import { globalStyles } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuSide = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}
      drawerContent={props => <MenuInternal {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuInternal = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={globalStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          style={globalStyles.avatar}
        />
      </View>
      {/* MenuOptions */}
      <View style={globalStyles.menuContainer}>
        <TouchableOpacity
          style={globalStyles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={globalStyles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.menuButton}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={globalStyles.menuText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
