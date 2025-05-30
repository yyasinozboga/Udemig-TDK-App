import {View, Animated, StatusBar, useAnimatedValue} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {colors} from '../../utils/constants';
import Hero from './hero';
import Bg from '../../components/Bg';
import {Logo} from '../../icons';
import Search from './search';
import {useFocusEffect} from '@react-navigation/native';
import More from './more';
import Loader from '../../components/Loader';
import api from '../../api';

const SearchScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const height = useAnimatedValue(0);

  useEffect(() => {
    if (!isFocused) {
      api
        .get('/icerik')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => !isFocused && <More />,

      headerStyle: {
        backgroundColor: isFocused ? colors.softRed : colors.red,
      },
    });
  }),
    [];

  useEffect(() => {
    if (isFocused) {
      Animated.timing(height, {
        toValue: 676,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(height, {
        toValue: 400,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(isFocused ? 'dark-content' : 'light-content');
    }, [isFocused]),
  );

  return (
    <Bg>
      {!isFocused && (
        <View style={{position: 'absolute', top: 100}}>
          <Logo color={colors.light} />
        </View>
      )}

      <Animated.View
        style={{
          backgroundColor: colors.softRed,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          height: height,
        }}>
        <Search setIsFocused={setIsFocused} isFocused={isFocused} />

        {!isFocused && (
          <View style={{width: '90%', marginHorizontal: 'auto', gap: 20}}>
            {isLoading ? <Loader /> : <Hero data={data} />}
          </View>
        )}
      </Animated.View>
    </Bg>
  );
};

export default SearchScreen;
