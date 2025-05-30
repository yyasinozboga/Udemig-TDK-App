import {View, Text, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const CategoryBar = ({data, selected, setSelected}) => {
  const filterItems = [
    {name: 'anlamlarListe', title: 'Açıklama'},
    {name: 'atasozu', title: 'Atasözleri & Deyimler'},
    {name: 'birlesikler', title: 'Birleşik Kelimeler'},
  ];

  const items = filterItems.filter(item => data[item.name]);

  return (
    <View style={styles.categoryBar}>
      {items.map((item, key) => (
        <Pressable key={key} onPress={() => setSelected(item.name)}>
          <Text style={{fontWeight: '700', fontSize: 13}}>{item.title}</Text>
          {selected === item.name && <View style={styles.item} />}
        </Pressable>
      ))}
    </View>
  );
};

export default CategoryBar;

const styles = StyleSheet.create({
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
    marginHorizontal: 'auto',
  },

  item: {
    backgroundColor: colors.red,
    width: 30,
    height: 2,
    marginHorizontal: 'auto',
    marginTop: 5,
  },
});
