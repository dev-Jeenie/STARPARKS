import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';

const HomeTab = () => {
  return <View></View>;
};
const HomeStackNavigator = () => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  );
};

const Login = () => {
  return <View></View>;
};

export type AuthStackParamList = {
  Login: undefined;
};
const AuthStack = () => {
  const AuthStack = React.useMemo(
    () => createStackNavigator<AuthStackParamList>(),
    [],
  );

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

const EntryStackNavigator = () => {
  const EntryStack = React.useMemo(() => createStackNavigator(), []);
  const principal = true;
  return (
    <EntryStack.Navigator
      initialRouteName={principal ? 'HomeStackNavigator' : 'AuthStack'}>
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
