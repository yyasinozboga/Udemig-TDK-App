import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../utils/constants';

const SuggestedCard = ({title, desc}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate(screens.DetailScreen, {keyword: title})
      }>
      <View style={{backgroundColor: 'lightgray', width: 2, height: '100%'}} />
      <View>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 20}}>
          {title}
        </Text>
        <Text style={{color: 'gray'}}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestedCard;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 10,
    width: '100%',
  },
});
