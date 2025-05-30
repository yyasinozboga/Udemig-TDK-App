import {View, StyleSheet} from 'react-native';
import {colors} from '../utils/constants';

const Loader = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={[styles.bg, {width: 200}]} />
        <View style={[styles.bg, {width: 300}]} />
      </View>

      <View style={styles.card}>
        <View style={[styles.bg, {width: 200}]} />
        <View style={[styles.bg, {width: 300}]} />
      </View>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },

  card: {
    backgroundColor: 'white',
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
