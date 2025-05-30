import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, screens} from '../utils/constants';
import HistoryScreen from '../screens/HistoryScreen';
import SavedScreen from '../screens/SavedScreen';
import SvgRotateCcw from '../icons/RotateCcw';
import SvgSearch from '../icons/Search';
import SvgFavorite from '../icons/Favorite';
import {useNavigation} from '@react-navigation/native';
import SvgLeft from '../icons/Left';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();
  const lightBgRoutes = ['HistoryScreen', 'SavedScreen'];

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({route}) => ({
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.softRed,
        tabBarActiveTintColor: colors.red,
        headerStyle: {
          backgroundColor: lightBgRoutes.includes(route.name)
            ? colors.light
            : colors.red,
        },
        tabBarStyle: {
          backgroundColor: lightBgRoutes.includes(route.name)
            ? colors.light
            : colors.softRed,
        },
      })}>
      <Tab.Screen
        name={screens.HistoryScreen}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color}) => <SvgRotateCcw color={color} />,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}>
              <SvgLeft color={colors.textDark} width={25} />
            </TouchableOpacity>
          ),
          headerTitle: 'Geçmiş',
        }}
      />
      <Tab.Screen
        name="Main"
        component={HomeNavigation}
        options={{
          header: () => <View />,
          headerTitleStyle: {display: 'none'},
          tabBarIcon: () => (
            <TouchableOpacity
              style={{
                height: 90,
                width: 90,
                backgroundColor: 'transparent',
                borderRadius: 50,
                marginTop: -30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate(screens.SearchScreen)}>
              <View
                style={{
                  backgroundColor: colors.red,
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <SvgSearch color="#fff" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={screens.SavedScreen}
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => <SvgFavorite color={color} />,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}>
              <SvgLeft color={colors.textDark} width={25} />
            </TouchableOpacity>
          ),
          headerTitle: 'Favoriler',
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
