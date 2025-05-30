import {Text, TouchableOpacity} from 'react-native';
import {ArrowRight2} from 'iconsax-react-native';
import {colors, screens} from '../../../../utils/constants';
import {useNavigation} from '@react-navigation/native';

const ResultsItem = ({text, keyWord, lastText}) => {
  const navigation = useNavigation();

  const editText = text => {
    const parts = text.split(keyWord);

    return parts.map((part, index) => (
      <Text key={index}>
        {part}
        {index < parts.length - 1 && (
          <Text style={{fontWeight: '700'}}>{keyWord}</Text>
        )}
      </Text>
    ));
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.DetailScreen, {keyword: text})}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: '90%',
        borderBottomColor: colors.light,
        borderBottomWidth: lastText && 1,
        marginHorizontal: 'auto',
      }}>
      <Text>{editText(text)}</Text>
      <ArrowRight2 size="20" color={colors.red} />
    </TouchableOpacity>
  );
};

export default ResultsItem;
