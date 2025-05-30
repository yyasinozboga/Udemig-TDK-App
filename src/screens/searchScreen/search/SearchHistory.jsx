import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {colors, data} from '../../../utils/constants';
import React from 'react';

const SearchHistory = ({getResults}) => {
  const handleClick = title => {
    getResults(title);
  };

  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              marginVertical: 10,
            }}
            onPress={() => handleClick(item.title)}>
            <Text
              style={{color: colors.textDark, fontSize: 17, fontWeight: '700'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text style={{color: colors.textMedium}}>SON ARAMALAR</Text>
        }
      />
    </View>
  );
};

export default React.memo(SearchHistory);
