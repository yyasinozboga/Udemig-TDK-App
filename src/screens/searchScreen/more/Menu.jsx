import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import Bg from '../../../components/Bg';
import {colors} from '../../../utils/constants';
import {Logo} from '../../../icons';
import React from 'react';

const Menu = ({setSelected}) => {
  return (
    <>
      <View style={{height: 200, width: '100%'}}>
        <Bg>
          <View style={styles.content}>
            <View style={styles.border} />
            <View>
              <Logo color={colors.light} />
            </View>
            <Text style={styles.title}>Türk Dil Kurumu Başkanlığı</Text>

            <Text style={styles.version}>v.1.0</Text>
          </View>
        </Bg>
      </View>

      <View style={{width: '90%', margin: 'auto', gap: 10}}>
        <Button
          text="Hakkında"
          width="100%"
          selected={() => setSelected('about')}
        />
        <Button
          text="İletişim"
          width="100%"
          selected={() => setSelected('contact')}
        />
      </View>
    </>
  );
};

export default React.memo(Menu);

const styles = StyleSheet.create({
  border: {
    backgroundColor: colors.textDark,
    height: 4,
    width: 70,
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.3,
  },

  version: {
    color: colors.light,
    fontSize: 12,
    opacity: 0.7,
  },

  title: {
    color: colors.light,
    fontWeight: '700',
    fontSize: 16,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});
