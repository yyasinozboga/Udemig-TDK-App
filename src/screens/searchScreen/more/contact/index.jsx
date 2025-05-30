import {View, Text, Pressable} from 'react-native';
import {colors} from '../../../../utils/constants';
import {Left} from '../../../../icons';
import {Printer} from 'iconsax-react-native';
import styles from '../styles';
import Col from './Col';
import Footer from './Footer';
import {useState} from 'react';
import {MoreSquare} from 'iconsax-react-native';
import Button from '../Button';

const Contact = ({setSelected}) => {
  const [page, setPage] = useState('contact');

  const TDKContactInfo = {
    icon: <Printer size="22" color={colors.red} />,
    title: 'Türk Dil Kurumu Başkanlığı',
    address: 'Atatürk Bulvarı No: 217 06680 Kavaklıdere/ANKARA',
    buttonText: 'E-Posta Yaz',
    width: 150,
  };

  const KKSMContactInfo = {
    title: 'Kızılay Kitap Satış Mağazası',
    address: 'Cumhuriyet Mahallesi, Bayındır 1 Sokak, No: 24/6 Kızılay/ANKARA',
    buttonText: 'E-Mağazaya Git',
    width: '100%',
  };

  return (
    <>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Pressable style={styles.backBtn} onPress={() => setSelected('menu')}>
            <Left color={colors.textMedium} width={18} />
          </Pressable>

          <Text style={styles.strongText}>
            {page === 'contact' ? 'İletişim Bilgileri' : 'Katkı ve Öneriler'}
          </Text>
        </View>

        {page === 'contact' ? (
          <>
            <Col {...TDKContactInfo} />

            <View style={styles.border} />

            <Col {...KKSMContactInfo} />
          </>
        ) : (
          <View
            style={{
              height: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
            <MoreSquare size="32" color={colors.red} />
            <Text style={[styles.text, {color: colors.textLight}]}>
              Katkı ve önerileriniz için bize e-posta gönderebilirsiniz.
            </Text>
            <Button text="E-Posta Yaz" width={150} />
          </View>
        )}
      </View>

      <Footer setPage={setPage} page={page} />
    </>
  );
};

export default Contact;
