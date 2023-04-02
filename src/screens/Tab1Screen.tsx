import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('call');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  );
};
