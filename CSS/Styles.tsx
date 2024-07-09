import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 16,
  },
  splashpage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
   
  },
  notification: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#2196F3',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 50,
  },
  profile: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  authtext: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 25,
    color: 'blue',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
  capturedPhoto: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  photoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  takePhoto: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default styles;
