import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NongkrongScreen from './screens/Nongkrong';
import TabNavigators from './navigators/TabNavigators';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tab' component={TabNavigators} options={{
            headerShown: false
          }} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
