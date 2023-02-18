import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.globalmargin}>
      <Text style={globalStyles.title}>Page1Screen</Text>
      <Button
        title="Ir Pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navigation with Props</Text>
      <View style={globalStyles.buttonStack}>
        <TouchableOpacity
          style={globalStyles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Yuliana',
            })
          }>
          <Text style={globalStyles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={globalStyles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
