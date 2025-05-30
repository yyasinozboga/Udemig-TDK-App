import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, screens} from '../utils/constants';
import {ArrowRight2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const DetailCard = ({item, detail}) => {
  const navigation = useNavigation();
  const orneklerListe = item.orneklerListe?.[0];
  const ornek = orneklerListe?.ornek;
  const yazar = orneklerListe?.yazar?.[0].kisa_adi;
  const anlam = item.anlam;
  const anlam_sira = item.anlam_sira;
  const madde = item.madde;

  return anlam ? (
    <TouchableOpacity
      style={{
        flexDirection: detail ? 'column' : 'row',
        gap: 10,
        paddingVertical: 20,
      }}>
      {!detail && <Text>{anlam_sira}</Text>}
      <View style={{gap: 10}}>
        <Text style={{color: colors.red, fontStyle: 'italic'}}>
          İSİM{detail && ', Mecaz'}
        </Text>
        <Text style={{fontWeight: '600'}}>{anlam}</Text>
        {ornek && (
          <Text style={{color: colors.textLight}}>
            "{ornek}"<Text style={{fontWeight: '700'}}>{yazar}</Text>
          </Text>
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screens.KeyWordDetailScreen, {
          keyword: madde || item,
          type: madde && true,
        })
      }
      style={styles.card}>
      <Text style={{fontWeight: '700', width: 200}}>{madde || item}</Text>

      <ArrowRight2 size="20" color={colors.red} />
    </TouchableOpacity>
  );
};

export default React.memo(DetailCard);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.softRed,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
