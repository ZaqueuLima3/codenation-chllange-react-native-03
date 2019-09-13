import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Acceleration from './screens/Acceleration';
import Profile from './screens/Profile';

const Routes = createAppContainer(
  createSwitchNavigator({
    Acceleration,
    Profile,
  })
)

export default Routes;