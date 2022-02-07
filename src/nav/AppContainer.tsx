import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, View} from 'react-native';
import assets from '../../assets';
import theme from '../commons/theme';
import GiftScreen from '../pages/home/GiftScreen';
import HomeScreen from '../pages/home/HomeScreen';
import OrderScreen from '../pages/home/OrderScreen';
import OtherScreen from '../pages/home/OtherScreen';
import PayScreen from '../pages/home/PayScreen';
import Login from '../pages/Login';
import Agreement from '../pages/SignUp.tsx/Agreement';
import ChangePassword from '../pages/SignUp.tsx/ChangePassword';
import FoundId from '../pages/SignUp.tsx/FoundId';
import Identification from '../pages/SignUp.tsx/Identification';

const HomeTab = () => {
  const Tab = React.useMemo(() => createBottomTabNavigator(), []);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarStyle: {height: 90},
        }}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.MAIN_PRIMARY
                    : theme.colors.grayScale500,
                }}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <View>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_home}
                  />
                </View>
              ) : (
                <View style={{backgroundColor: theme.colors.defaultBackground}}>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_home}
                  />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name={'Pay'}
          component={PayScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.MAIN_PRIMARY
                    : theme.colors.grayScale500,
                }}>
                Pay
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <View>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_card}
                  />
                </View>
              ) : (
                <View style={{backgroundColor: theme.colors.defaultBackground}}>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_card}
                  />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name={'Order'}
          component={OrderScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.MAIN_PRIMARY
                    : theme.colors.grayScale500,
                }}>
                Order
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <View>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_drink}
                  />
                </View>
              ) : (
                <View style={{backgroundColor: theme.colors.defaultBackground}}>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_drink}
                  />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name={'Gift'}
          component={GiftScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.MAIN_PRIMARY
                    : theme.colors.grayScale500,
                }}>
                Gift
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <View>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_gift}
                  />
                </View>
              ) : (
                <View style={{backgroundColor: theme.colors.defaultBackground}}>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_gift}
                  />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name={'Other'}
          component={OtherScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.MAIN_PRIMARY
                    : theme.colors.grayScale500,
                }}>
                Other
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <View>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_dots}
                  />
                </View>
              ) : (
                <View style={{backgroundColor: theme.colors.defaultBackground}}>
                  <Image
                    style={{width: 30, height: 30, opacity: 0.3}}
                    source={assets.icon_dots}
                  />
                </View>
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const HomeStackNavigator = () => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  );
};

export type AuthStackParamList = {
  Login: undefined;
  Identification: undefined;
  FoundId: undefined;
  ChangePassword: undefined;
  Agreement: undefined;
};
const AuthStack = () => {
  const AuthStack = React.useMemo(
    () => createStackNavigator<AuthStackParamList>(),
    [],
  );

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Identification" component={Identification} />
      <AuthStack.Screen name="FoundId" component={FoundId} />
      <AuthStack.Screen name="ChangePassword" component={ChangePassword} />
      <AuthStack.Screen name="Agreement" component={Agreement} />
    </AuthStack.Navigator>
  );
};

export type EntryStackParamList = {
  HomeStackNavigator: undefined;
  AuthStack: undefined;
};
const EntryStackNavigator = () => {
  const EntryStack = React.useMemo(
    () => createStackNavigator<EntryStackParamList>(),
    [],
  );
  const principal = false;
  return (
    <EntryStack.Navigator
      initialRouteName={principal ? 'HomeStackNavigator' : 'AuthStack'}
      screenOptions={{
        // headerShown: false,
        title: '',
        headerStyle: {
          backgroundColor: theme.colors.defaultBackground,
          // backgroundColor: theme.colors.MAIN_PRIMARY,
          shadowColor: 'transparent',
          // height: insets.top + 70,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => {
          return (
            <View
              style={{
                // paddingTop: 30,
                backgroundColor: 'pink',
                width: 40,
                height: 40,
              }}>
              {/* <BackBtn onPress={() => navigation.goBack()} /> */}
              <Text>sdfsdf</Text>
            </View>
          );
        },
      }}>
      <EntryStack.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
      />
      <EntryStack.Screen name="AuthStack" component={AuthStack} />
    </EntryStack.Navigator>
  );
};

const AppContainer = () => {
  return <EntryStackNavigator></EntryStackNavigator>;
};

export default AppContainer;
