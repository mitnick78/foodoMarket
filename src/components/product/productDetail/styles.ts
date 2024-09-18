import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomSheetContent: {
    padding: 16,
    alignItems: 'center',
  },
  bottomSheetImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 16,
  },
  bottomSheetName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bottomSheetPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 16,
  },
  validateButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  validateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
