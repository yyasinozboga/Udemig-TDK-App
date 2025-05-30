import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/constants';
import LetterItem from './LetterItem';
import React from 'react';

const Letters = ({letters}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Türk İşaret Dili</Text>
      <Text style={{color: colors.textLight}}>
        Parmak Alfabesiyle Gösterilişi
      </Text>
      <FlatList
        data={letters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, key) => key}
        contentContainerStyle={{
          gap: 20,
          marginTop: 20,
        }}
        renderItem={({item}) => <LetterItem item={item} />}
      />
    </View>
  );
};

export default React.memo(Letters);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '85%',
    margin: 'auto',
    gap: 10,
  },

  title: {
    color: colors.textDark,
    fontWeight: '600',
    fontSize: 20,
  },
});
