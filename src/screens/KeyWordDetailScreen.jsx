import {View, Text, TouchableOpacity, FlatList, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import api from '../api';
import {colors, screens} from '../utils/constants';
import DetailCard from '../components/DetailCard';
import Input from '../components/Input';
import LetterButton from '../components/LetterButton';
import SaveButton from '../components/SaveButton';
import SvgLeft from '../icons/Left';

const KeyWordDetailScreen = ({route, navigation}) => {
  const [data, setData] = useState(null);
  const {keyword, type} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.navigate(screens.DetailScreen, {keyword})}
          style={{marginLeft: 15}}>
          <SvgLeft color={colors.textDark} width={25} />
        </Pressable>
      ),

      headerStyle: {
        backgroundColor: type
          ? colors.atasozleriLight
          : colors.birlesikKelimeLight,
      },

      headerTitle: keyword,
    });

    if (type) {
      api
        .get(`/atasozu?ara=${keyword}`)
        .then(res => setData(res.data[0]))
        .catch(err => console.log(err));
    } else {
      api
        .get(`/gts?ara=${keyword.trim()}`)
        .then(res => setData(res.data[0]))
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: type
          ? colors.atasozleriLight
          : colors.birlesikKelimeLight,
        flex: 1,
      }}>
      <Input
        color={type ? colors.atasozleriMedium : colors.birlesikKelimeMedium}
        bg={type ? colors.atasozleriLight : colors.birlesikKelimeLight}
      />
      <View>
        <Text
          style={{
            fontSize: 40,
            color: type ? colors.atasozleriDark : colors.birlesikKelimeDark,
            fontWeight: '600',
            marginTop: 20,
          }}>
          {keyword.trim()}
        </Text>
        <Text style={{color: colors.textMedium}}>
          {type ? 'Atasözleri ve Deyimler' : 'Birleşik Kelime'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginVertical: 20,
          }}>
          <SaveButton
            type={type ? 'atasozu' : 'birlesik'}
            madde={data?.madde}
            madde_id={data?.madde_id}
          />

          <LetterButton madde={keyword} />
        </View>
        {!type ? (
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              borderRadius: 10,
            }}>
            <FlatList
              data={data?.anlamlarListe}
              renderItem={({item}) => <DetailCard item={item} detail />}
            />
          </View>
        ) : (
          data?.anlami && (
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
              <Text style={{fontWeight: '600'}}>{data.anlami}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};

export default KeyWordDetailScreen;
