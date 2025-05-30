import {View, FlatList, Text} from 'react-native';
import ResultsItem from './ResultsItem';
import React from 'react';

const Results = ({data}) => {
  const list = data?.birlesikler?.split(',');

  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      {data.error ? (
        <Text>Error</Text>
      ) : (
        data && (
          <FlatList
            data={list}
            renderItem={({item}) => (
              <ResultsItem
                text={item}
                keyWord={data.madde}
                lastText={list[list.length - 1]}
              />
            )}
          />
        )
      )}
    </View>
  );
};

export default React.memo(Results);
