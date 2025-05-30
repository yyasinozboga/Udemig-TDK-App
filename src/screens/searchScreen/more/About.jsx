import {View, Text, Pressable} from 'react-native';
import {Left, Logo} from '../../../icons';
import {colors} from '../../../utils/constants';
import styles from './styles';

const About = ({setSelected}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => setSelected('menu')}>
          <Left color={colors.textMedium} width={18} />
        </Pressable>

        <Text style={styles.strongText}>Hakkında</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Logo color={colors.red} />
        </View>

        <Text style={styles.text}>
          <Text style={styles.strongText}>Türk Dil Kurumu'</Text>
          nun 1945'ten beri yayımlanan Türkçe Sözlük'ünün 2011 yılında yapılan
          11.baskısının gözden geçirilip güncellenerek taşınabilir cihazlar için
          hazırlanan sürümüdür.
        </Text>
      </View>
    </View>
  );
};

export default About;
