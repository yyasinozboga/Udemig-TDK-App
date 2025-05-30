import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useAnimatedValue,
} from 'react-native';
import {colors} from '../utils/constants';
import SvgHand from '../icons/Hand';
import Letters from './letters';
import MyModal from './MyModal';
import {useState} from 'react';

const LetterButton = ({madde}) => {
  const [letters, setLetters] = useState(null);
  const [visible, setVisible] = useState(false);
  const modal = useAnimatedValue(0);

  const showModal = () => {
    Animated.timing(modal, {
      toValue: 350,
      duration: 250,
      useNativeDriver: false,
    }).start();

    setVisible(true);
    setLetters(madde.split(''));
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <SvgHand color={colors.textLight} width={25} />
        <Text style={{fontWeight: '700', color: colors.textLight}}>
          Türk İşaret Dili
        </Text>
      </TouchableOpacity>

      <MyModal visible={visible} modal={modal} setVisible={setVisible}>
        <Letters letters={letters} />
      </MyModal>
    </>
  );
};

export default LetterButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
