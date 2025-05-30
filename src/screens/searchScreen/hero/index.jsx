import {View, Text} from 'react-native';
import SuggestedCard from './SuggestedCard';

const Hero = ({data}) => {
  return (
    <>
      <View style={{alignItems: 'start', width: '100%', gap: 10}}>
        <Text style={{color: 'gray'}}>Bir Deyim</Text>
        <SuggestedCard
          title={data?.kelime[0].madde}
          desc={data?.kelime[0].anlam}
        />
      </View>

      <View style={{alignItems: 'start', width: '100%', gap: 10}}>
        <Text style={{color: 'gray'}}>Bir Deyim - Atasözü</Text>
        <SuggestedCard
          title={data?.atasoz[0].madde}
          desc={data?.atasoz[0].anlam}
        />
      </View>
    </>
  );
};

export default Hero;
