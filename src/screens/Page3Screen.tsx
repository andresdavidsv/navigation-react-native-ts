import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { globalStyles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.globalmargin}>
      <Text style={globalStyles.title}>Page3Screen</Text>
      <Button title="Return" onPress={() => navigation.pop()} />
      <Button title="To Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
