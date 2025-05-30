import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import SvgSearch from '../icons/Search';
import {screens} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Input = ({bg, color}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <Pressable style={styles.button}>
        <SvgSearch color={color} />
      </Pressable>
      <TextInput
        style={[styles.input, {color: color, paddingLeft: 60}]}
        placeholder="Güncel Türkçe Sözlükte'te ara"
        placeholderTextColor={color}
        onFocus={() => navigation.navigate(screens.SearchScreen)}
      />
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    position: 'relative',
    height: 50,
    width: '100%',
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  button: {
    position: 'absolute',
    top: 0,
    left: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    paddingHorizontal: 20,
    paddingLeft: 60,
    fontSize: 15,
    height: '100%',
    fontWeight: '500',
  },
});
