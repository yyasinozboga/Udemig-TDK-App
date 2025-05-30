import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
import LetterButton from '../../components/LetterButton';
import SaveButton from '../../components/SaveButton';
import SoundButton from '../../components/SoundButton';
import React from 'react';

const Heading = ({data}) => {
  return (
    <View style={{gap: 10, paddingBottom: 10}}>
      <Text style={{fontWeight: '600', fontSize: 40}}>{data?.madde}</Text>
      <Text style={{color: colors.textLight, fontStyle: 'italic'}}>
        {data?.lisan}
      </Text>
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <SoundButton madde={data?.madde} />
          <SaveButton
            madde={data?.madde}
            madde_id={data?.madde_id}
            type="sozcuk"
          />
        </View>

        <LetterButton madde={data?.madde} />
      </View>
    </View>
  );
};

export default React.memo(Heading);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
