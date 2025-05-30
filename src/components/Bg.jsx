import {ImageBackground} from 'react-native';
import bg from '../assets/bg.jpg';

function Bg({children}) {
  return (
    <ImageBackground
      source={bg}
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
      }}>
      {children}
    </ImageBackground>
  );
}

export default Bg;
