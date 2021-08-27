import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import ResultsShowScreen from './src/screens/SearchScreen/ResultsShowScreen';

const AppNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    ResultsShow: {
      screen: ResultsShowScreen
    }
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    },
    headerMode: 'screen'
  }
);

export default createAppContainer(AppNavigator);