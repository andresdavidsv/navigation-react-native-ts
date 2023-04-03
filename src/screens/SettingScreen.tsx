import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/appTheme';

export const SettingScreen = () => {
  const { authState } = useContext(AuthContext);
  return (
    <View>
      <Text>SettingScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteicon && (
        <Icon name={authState.favoriteicon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
