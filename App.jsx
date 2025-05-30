import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/RootNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import OpenScreen from './src/screens/OpenScreen';
import {useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        {!isClicked ? (
          <OpenScreen clicked={() => setIsClicked(true)} />
        ) : (
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        )}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
