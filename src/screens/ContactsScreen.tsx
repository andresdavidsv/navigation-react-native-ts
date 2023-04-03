import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
  const { signIn, authState } = useContext(AuthContext);
  return (
    <View style={globalStyles.globalmargin}>
      <Text style={globalStyles.title}>ContactsScreen</Text>
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
