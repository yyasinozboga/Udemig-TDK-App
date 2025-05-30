import {
  Animated,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';
import {colors} from '../utils/constants';

const MyModal = ({children, visible, modal, setVisible}) => {
  const hideModal = () => {
    setVisible(false);
    Animated.timing(modal, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={hideModal}>
        <View style={styles.modal}>
          <Animated.View style={[styles.modalInner, {height: modal}]}>
            <Pressable
              style={{width: '100%', height: '100%'}}
              onPress={() => setVisible(true)}>
              {children}
            </Pressable>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  border: {
    backgroundColor: colors.textDark,
    height: 4,
    width: 70,
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.3,
  },

  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
  },

  modalInner: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
