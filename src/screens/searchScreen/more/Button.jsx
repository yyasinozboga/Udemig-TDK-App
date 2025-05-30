import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({text, width, selected}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: width}]}
      onPress={selected}>
      <Text style={[styles.strongText, {textAlign: 'center'}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
