import {View, Text, StatusBar} from 'react-native';
import {useCallback} from 'react';
import SvgRotateCcw from '../icons/RotateCcw';
import {colors} from '../utils/constants';
import {useFocusEffect} from '@react-navigation/native';

const HistoryScreen = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.light,
      }}>
      <View style={{alignItems: 'center', gap: 30}}>
        <SvgRotateCcw color={colors.textLight} width={40} />
        <Text style={{color: colors.textDark, fontWeight: '600'}}>
          Henüz geçmiş yok.
        </Text>
      </View>
    </View>
  );
};

export default HistoryScreen;
