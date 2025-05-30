import React, {useEffect, useState} from 'react';
import {Animated, Pressable, useAnimatedValue, View} from 'react-native';
import SvgMore from '../../../icons/More';
import {colors} from '../../../utils/constants';
import MyModal from '../../../components/MyModal';
import Menu from './Menu';
import About from './About';
import Contact from './contact';

const More = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('menu');
  const modal = useAnimatedValue(0);

  const showModal = () => {
    setVisible(true);
    setSelected('menu');
    Animated.timing(modal, {
      toValue: 440,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (selected === 'menu' || selected === 'about') {
      Animated.timing(modal, {
        toValue: 440,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modal, {
        toValue: 620,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [selected]);

  return (
    <View>
      <Pressable onPress={showModal}>
        <SvgMore color={colors.softRed} />
      </Pressable>

      <MyModal modal={modal} setVisible={setVisible} visible={visible}>
        {selected === 'menu' ? (
          <Menu setSelected={setSelected} />
        ) : selected === 'about' ? (
          <About setSelected={setSelected} />
        ) : (
          <Contact setSelected={setSelected} />
        )}
      </MyModal>
    </View>
  );
};

export default React.memo(More);
