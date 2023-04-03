import { TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../themes/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
  const { changeFavoriteIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};
