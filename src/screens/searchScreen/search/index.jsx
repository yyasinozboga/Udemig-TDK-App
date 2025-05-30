import {View, Animated} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styles from './styles';
import Letters from './Letters';
import SearchHistory from './SearchHistory';
import api from '../../../api';
import Results from './results';
import {colors, screens} from '../../../utils/constants';
import SearchInput from './SearchInput';
import {useNavigation} from '@react-navigation/native';

const Search = ({setIsFocused, isFocused}) => {
  const [text, setText] = useState('');
  const [data, setData] = useState(null);
  const margin = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const getResults = text => {
    api
      .get(`/gts?ara=${text}`)
      .then(res => {
        setText(text);
        if (!res.data.error) {
          if (res.data[0].birlesikler) {
            setData(res.data[0]);
          } else {
            setText('');
            navigation.navigate(screens.DetailScreen, {keyword: text});
          }
        } else {
          setData(res.data);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (isFocused) {
      Animated.timing(margin, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(margin, {
        toValue: -30,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [isFocused]);

  return (
    <View style={{flex: isFocused && 1}}>
      <Animated.View
        style={[
          styles.container,
          {transform: [{translateY: margin}], gap: isFocused ? 20 : 50},
        ]}>
        <SearchInput
          color={colors.textLight}
          getResults={getResults}
          setIsFocused={setIsFocused}
          isFocused={isFocused}
          setText={setText}
          text={text}
          setData={setData}
        />
        {isFocused && (
          <>
            <Letters />
            {data ? (
              <Results data={data} />
            ) : (
              <SearchHistory getResults={getResults} />
            )}
          </>
        )}
      </Animated.View>
    </View>
  );
};

export default React.memo(Search);
