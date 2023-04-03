import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../themes/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
  useEffect(() => {
    console.log('call');
  }, []);

  return (
    <View style={{ ...globalStyles.globalmargin, marginTop: top }}>
      <Text style={globalStyles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
