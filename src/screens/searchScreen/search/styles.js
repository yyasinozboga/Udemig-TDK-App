import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 'auto',
    width: '100%',
  },

  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    height: 50,
    overflow: 'hidden',
    marginHorizontal: 'auto',
    borderRadius: 10,
  },

  input: {
    color: colors.textDark,
    backgroundColor: colors.softRed,
    fontSize: 16,
    height: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  button: {
    position: 'absolute',
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.softRed,
    borderRadius: 10,
  },
});

export default styles;
