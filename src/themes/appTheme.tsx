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
});
