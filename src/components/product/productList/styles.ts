import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});
