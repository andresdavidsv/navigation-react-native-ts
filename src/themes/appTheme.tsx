import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  globalmargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
  },
  buttonStack: { flexDirection: 'row' },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
});

export const colors = {
  primary: '#5856D6',
};
