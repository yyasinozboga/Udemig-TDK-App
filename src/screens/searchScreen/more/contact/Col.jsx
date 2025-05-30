import {View, Text} from 'react-native';
import {Call} from 'iconsax-react-native';
import styles from '../styles';
import Button from '../Button';
import {colors} from '../../../../utils/constants';

const Col = ({title, address, icon, width, buttonText}) => {
  return (
    <View style={styles.col}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
      <View style={{gap: 10}}>
        <View style={styles.contact}>
          <Call size="22" color={colors.red} />
          <Text style={styles.phone}>+90 312 457 52 00</Text>
        </View>
        {icon && (
          <View style={styles.contact}>
            {icon}
            <Text style={styles.phone}>+90 312 457 52 00</Text>
          </View>
        )}
      </View>
      <Button text={buttonText} width={width} />
    </View>
  );
};

export default Col;
