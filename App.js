import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import RecommendedMovies from './screen/recommended';
import PopularMovies from './screen/popular';
import HomeScreen from './screen/home';

export default function App() {
  return <AppContainer />;
}
const AppTopNavigator = createMaterialTopTabNavigator({
  Recommended: {
    screen: RecommendedMovies,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' },
      },
    },
  },
  Popular: {
    screen: PopularMovies,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' },
      },
    },
  },
});
const AppStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    AppTopNav: {
      screen: AppTopNavigator,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#fff',
        headerTitle: 'recommendedMovies',
        heaederStyle: { backgroundColor: '#d500f9' },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: RFValue(18),
        },
      },
    },
  },
  { initialRouteName: 'Home' }
);
const AppContainer = createAppContainer(AppStackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
