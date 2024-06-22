import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Churchform from './components/Churchform';
import WelcomePage from './components/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}} 
      initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Church" component={Churchform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// import { Text, View } from 'react-native';
// import Churchform from './components/Churchform';
// import WelcomeScreen from './components/WelcomeScreen';


// export default function App() {
//   return (
//     <View>
//       <WelcomeScreen/>
//     </View>
//   );
// }


