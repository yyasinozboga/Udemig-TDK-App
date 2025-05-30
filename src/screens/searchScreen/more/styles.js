import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '90%',
    margin: 'auto',
    gap: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },

  strongText: {
    fontWeight: '600',
    color: colors.textDark,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  text: {
    textAlign: 'center',
    color: colors.textMedium,
    lineHeight: 20,
    width: '80%',
  },

  button: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 15,
  },

  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 50,
  },

  title: {
    color: colors.textDark,
    fontSize: 20,
    fontWeight: '600',
  },

  phone: {
    color: colors.textLight,
    fontWeight: '600',
  },

  border: {
    height: 2,
    backgroundColor: colors.light,
  },

  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  address: {
    color: colors.textLight,
    width: 250,
    fontWeight: '600',
  },

  col: {
    gap: 20,
    paddingStart: 10,
  },

  footer: {
    backgroundColor: colors.light,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default styles;
