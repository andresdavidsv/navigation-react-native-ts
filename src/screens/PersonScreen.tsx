import React, { useContext, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { globalStyles } from '../themes/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({ route, navigation }: Props) => {
  const { changeUsername } = useContext(AuthContext);
  // const params = route.params as RouteParams;
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params.name);
  }, []);

  return (
    <View style={globalStyles.globalmargin}>
      <Text style={globalStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
