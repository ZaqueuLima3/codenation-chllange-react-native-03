
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './src/screens/Profile';
import Acceleration from './src/screens/Acceleration';

const Routes = createStackNavigator({
  Acceleration: Acceleration,
  Profile: Profile,
}, {headerMode: 'none'})

const App = createAppContainer(Routes);

export default App;