import {View, Text} from 'react-native';
import {colors, TurkishLetters} from '../../../utils/constants';
import React from 'react';

const Letters = () => {
  return (
    <View
      style={{
        backgroundColor: colors.light,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginHorizontal: 'auto',
          paddingVertical: 15,
        }}>
        {TurkishLetters.map(letter => (
          <View key={letter}>
            <Text style={{fontSize: 17, color: colors.textMedium}}>
              {letter}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(Letters);
