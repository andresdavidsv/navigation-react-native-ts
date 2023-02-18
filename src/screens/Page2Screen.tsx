import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../themes/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Back',
    });
  }, [navigator]);

  return (
    <View style={globalStyles.globalmargin}>
      <Text style={globalStyles.title}>Page1Screen</Text>
      <Button
        title="Ir Pagina 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
