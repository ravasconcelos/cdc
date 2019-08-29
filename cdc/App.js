import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingComponent from './components/LoadingComponent';
import InitialComponent from './components/InitialComponent';
import GameComponent from './components/GameComponent';

const MainNavigator = createStackNavigator({
    Loading: { screen: LoadingComponent },
    Initial: { screen: InitialComponent },
    Game: { screen: GameComponent },
  },
  {
    //mode: 'modal',
    headerMode: 'none',
  });

const App = createAppContainer(MainNavigator);

export default App;
