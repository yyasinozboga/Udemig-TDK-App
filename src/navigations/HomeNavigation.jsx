import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors, screens} from '../utils/constants';
import SearchScreen from '../screens/searchScreen';
import DetailScreen from '../screens/detailScreen';
import KeyWordDetailScreen from '../screens/KeyWordDetailScreen';
import {Pressable} from 'react-native';
import SvgMore from '../icons/More';
import SvgLeft from '../icons/Left';

const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={screens.SearchScreen}
        component={SearchScreen}
        options={{
          headerTitleStyle: {color: 'transparent'},
        }}
      />
      <Stack.Screen
        name={screens.DetailScreen}
        component={DetailScreen}
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate(screens.SearchScreen)}
              style={{marginLeft: 15}}>
              <SvgLeft color={colors.textDark} width={25} />
            </Pressable>
          ),

          headerRight: () => (
            <Pressable style={{marginRight: 15}}>
              <SvgMore color={colors.textDark} width={25} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={screens.KeyWordDetailScreen}
        component={KeyWordDetailScreen}
        options={{
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
