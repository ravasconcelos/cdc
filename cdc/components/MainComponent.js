import { createStackNavigator } from 'react-navigation';
import LoadingComponent from './LoadingComponent';
import InitialComponent from './InitialComponent';
import GameComponent from './GameComponent';

const Main = createStackNavigator({
    Loading: { screen: LoadingComponent },
    Initial: { screen: InitialComponent },
    Game: { screen: GameComponent },
  });

export default Main;