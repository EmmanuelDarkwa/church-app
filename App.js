import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomePage from "./screens/tabScreens/HomePage";
import ProfilePage from "./screens/tabScreens/ProfilePage";
import WelcomePage from "./screens/WelcomeScreen";
import Churchform from "./screens/Churchform";
import NotificationsPage from "./screens/tabScreens/NotificationsPage";
import VideoPage from "./screens/tabScreens/VideoPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#4B70F5"
       }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsPage}
        options={{
          title: "Notification",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={VideoPage}
        options={{
          title: "Watch",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="video" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Church" component={Churchform} />
        <Stack.Screen name="Profile" component={ProfilePage} />
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
