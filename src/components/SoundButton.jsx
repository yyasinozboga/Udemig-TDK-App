import {StyleSheet, TouchableOpacity} from 'react-native';
import SvgSound from '../icons/Sound';
import api from '../api';
import {colors} from '../utils/constants';
import TrackPlayer from 'react-native-track-player';
import {useEffect} from 'react';

const SoundButton = ({madde}) => {
  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        console.log('TrackPlayer initialized');
      } catch (err) {
        console.log('TrackPlayer setup error:', err);
      }
    };

    setupPlayer();
  }, []);

  const playSound = async () => {
    try {
      const res = await api.get(`/yazim?ara=${madde}`);
      const soundCode = res.data[0]?.seskod;

      await TrackPlayer.reset();
      if (soundCode) {
        await TrackPlayer.add({
          url: `https://sozluk.gov.tr/ses/${soundCode}.wav`,
        });

        await TrackPlayer.play();
      } else {
        console.log('Ses kodu yok!');
      }
    } catch (err) {
      console.log('Hata:', err);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={playSound}>
      <SvgSound size={25} color={colors.textLight} />
    </TouchableOpacity>
  );
};

export default SoundButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
