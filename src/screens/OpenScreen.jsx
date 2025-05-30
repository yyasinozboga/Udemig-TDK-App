import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Bg from '../components/Bg';
import {Logo} from '../icons';
import {colors} from '../utils/constants';

const OpenScreen = ({clicked}) => {
  return (
    <Pressable onPress={clicked}>
      <Bg>
        <View
          style={{
            position: 'absolute',
            top: '50%',
            left: '37%',
            transform: 'translate(-50%, -50%)',
          }}>
          <Logo color={colors.light} width={200} height={100} />
        </View>

        <Text
          style={{
            fontSize: 20,
            color: colors.light,
            fontWeight: '700',
            position: 'absolute',
            bottom: '20%',
          }}>
          Türkçe Sözlük
        </Text>
      </Bg>
    </Pressable>
  );
};

export default OpenScreen;

const styles = StyleSheet.create({
  bg: {},
});
