import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {colors} from '../../utils/constants';

const LetterItem = ({item}) => {
  const url = `https://sozluk.gov.tr/assets/img/isaret/${item}.gif`;

  return (
    <TouchableNativeFeedback>
      <View style={{gap: 10}}>
        <View style={styles.item}>
          <Image source={{uri: url}} style={{width: '100%', height: '100%'}} />
        </View>
        <View style={styles.border}>
          <Text style={styles.letter}>{item}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default LetterItem;

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.light,
    overflow: 'hidden',
    width: 100,
    height: 80,
  },

  border: {
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 10,
  },

  letter: {
    textAlign: 'center',
    fontWeight: '600',
    color: colors.textDark,
  },
});
