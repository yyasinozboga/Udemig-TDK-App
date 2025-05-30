import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import SvgBookmark from '../icons/Bookmark';
import {colors, screens} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getDataFromSaved} from '../redux/actions/savedActions';
import {ArrowRight2} from 'iconsax-react-native';
import {useFocusEffect} from '@react-navigation/native';

const SavedScreen = ({navigation}) => {
  const [selected, setSelected] = useState('sozcuk');
  const [isActive, setIsActive] = useState(false);
  const [newData, setNewData] = useState(null);
  const {isLoading, error, data} = useSelector(store => store.saved);
  const dispatch = useDispatch();
  const categories = [
    {value: 'sozcuk', title: 'Sözcük'},
    {value: 'atasozu', title: 'Atasözleri & Deyimler'},
    {value: 'birlesik', title: 'Birleşik Kelimeler'},
  ];

  useEffect(() => {
    dispatch(getDataFromSaved());
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      setIsActive(false);
    }, []),
  );

  useMemo(() => {
    const newData = data.map(item => ({...item, selected: false}));
    setNewData(newData);
  }, [data, isActive]);

  const handleLongPress = item => {
    setIsActive(true);
    const updated = newData.map(element => {
      if (element.id === item.id) {
        element.selected = true;
      }

      return element;
    });

    setNewData(updated);
  };

  const handleClick = item => {
    if (isActive) {
      const updated = newData.map(element => {
        if (element.id === item.id) {
          item.selected = !element.selected;
        }

        return element;
      });

      setNewData(updated);
    } else {
      navigation.navigate(screens.DetailScreen, {
        keyword: item.title,
      });
    }
  };

  const filtered = newData?.filter(item => item.type === selected);

  return (
    <SafeAreaView style={{backgroundColor: colors.light, flex: 1}}>
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error</Text>
        ) : data.length > 0 ? (
          <>
            <FlatList
              horizontal
              contentContainerStyle={styles.categoryBar}
              data={categories}
              renderItem={({item}) => (
                <Pressable onPress={() => setSelected(item.value)}>
                  <Text
                    style={{
                      color:
                        selected === item.value
                          ? colors.textDark
                          : colors.textLight,
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                  {selected === item.value && <View style={styles.border} />}
                </Pressable>
              )}
            />
            <FlatList
              data={filtered}
              contentContainerStyle={{gap: 20}}
              renderItem={({item}) => (
                <Pressable
                  style={[
                    styles.item,
                    {
                      borderWidth: item.selected ? 1 : 0,
                      borderColor: item.selected && colors.red,
                    },
                  ]}
                  onPress={() => handleClick(item)}
                  onLongPress={() => handleLongPress(item)}>
                  <Text style={styles.text}>{item.title}</Text>

                  <ArrowRight2 size="26" color={colors.red} />
                </Pressable>
              )}
              keyExtractor={item => item.id}
            />
          </>
        ) : (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{alignItems: 'center', gap: 30}}>
              <SvgBookmark color={colors.textLight} width={40} />
              <Text style={{color: colors.textDark, fontWeight: '600'}}>
                Henüz geçmiş yok.
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 'auto',
    gap: 10,
  },

  item: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.softRed,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: colors.textDark,
    fontWeight: '600',
    fontSize: 18,
  },

  categoryBar: {
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 15,
  },

  categoryText: {
    color: colors.textDark,
    fontWeight: '600',
  },

  border: {
    backgroundColor: colors.red,
    width: 20,
    marginHorizontal: 'auto',
    marginTop: 5,
    height: 2,
  },
});
