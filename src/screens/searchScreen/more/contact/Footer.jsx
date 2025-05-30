import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import {colors} from '../../../../utils/constants';

const Footer = ({setPage, page}) => {
  const array = [
    {value: 'contact', text: 'İletişim'},
    {value: 'suggestion', text: 'Katkı ve Öneriler'},
  ];

  return (
    <View style={styles.footer}>
      {array.map((item, key) => (
        <Pressable key={key} onPress={() => setPage(item.value)}>
          <Text style={[styles.strongText, {marginBottom: 5}]}>
            {item.text}
          </Text>
          {item.value === page && (
            <View
              style={{
                backgroundColor: colors.red,
                height: 2,
                width: 30,
                borderRadius: 10,
                marginHorizontal: 'auto',
              }}
            />
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default Footer;
