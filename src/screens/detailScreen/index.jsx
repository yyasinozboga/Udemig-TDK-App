import {View, StatusBar, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import api from '../../api';
import {colors} from '../../utils/constants';
import CategoryBar from './CategoryBar';
import Heading from './Heading';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import DetailCard from '../../components/DetailCard';

const DetailScreen = ({navigation, route}) => {
  const [selected, setSelected] = useState('anlamlarListe');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const keyword = route.params.keyword.trim();

  useEffect(() => {
    api
      .get(`/gts?ara=${keyword}`)
      .then(res => setData(res.data[0]))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

    StatusBar.setBarStyle('dark-content');
    navigation.setOptions({
      headerTitle:
        selected === 'anlamlarListe'
          ? route.params.keyword
          : selected === 'atasozu'
          ? 'Atasözleri & Deyimler'
          : 'Birleşik Kelimeler',

      headerStyle: {
        backgroundColor: colors.light,
      },
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 20,
          gap: 20,
          backgroundColor: colors.light,
          flex: 1,
        }}>
        <Input bg={colors.softRed} color={colors.textLight} />
        <Heading data={data} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CategoryBar
              data={data}
              selected={selected}
              setSelected={setSelected}
            />
            <FlatList
              data={
                selected !== 'birlesikler'
                  ? data[selected]
                  : data[selected].split(',')
              }
              renderItem={({item}) => <DetailCard item={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                backgroundColor:
                  selected === 'anlamlarListe' ? colors.softRed : 'transparent',
                paddingHorizontal: selected === 'anlamlarListe' ? 20 : 0,
                borderRadius: 10,
                paddingBottom: 20,
              }}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default DetailScreen;
