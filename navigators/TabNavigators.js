
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import NongkrongScreen from '../screens/Nongkrong';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator screenOptions={({route}) => {
            return {
                tabBarStyle: {
      
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
      
                    if (route.name === "Home"){
                        iconName = focused ? "ios-home" : "ios-home-outline"
                    } else if(route.name === "Nongkrong" || route.name === "NongkrongScreen"){
                        iconName = focused ? "ios-search" : "ios-search-outline"
                    } else if(route.name === "Profile"){
                        iconName = focused ? "ios-person" : "ios-person"
                    }
      
                    return <Ionicons name={iconName} color={color} size={size} />
                },
                tabBarActiveTintColor: "#3DB2FF",
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#43463F"
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
              }} />
              <Tab.Screen name="Nongkrong" component={NongkrongScreen} options={{
                headerShown: false
              }} />
              <Tab.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false
              }} />
            {/* <Tab.Screen name='SearchDetail' component={SearchDetailScreen} options={{
                tabBarButton: () => null,
                tabBarVisible: false,
            }} /> */}
          </Tab.Navigator>
    )
  }