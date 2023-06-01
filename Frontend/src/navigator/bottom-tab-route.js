import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackCreate from '../screens/track-create-screen';
import Account from '../screens/account-screen';
import StackRoot from './stack-route';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomRoot() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Stack' screenOptions={{ headerShown: false}}
        >
            <Tab.Screen name="Stack" component={StackRoot} options={{ tabBarIcon: ({size,color}) => <FontAwesome name="list-alt" size={size} color={color} />, title:'Tracks'}} />
            <Tab.Screen name="TrackCreate" component={TrackCreate} options={{ tabBarIcon: ({size,color}) => <FontAwesome name="plus-circle" size={size} color={color} />, title:'Create' }} />
            <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="account" size={size} color={color} />, title:'Account' }} />
        </Tab.Navigator>
    )
}


// To give tabBarIcon from screenOptions
// ({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Stack') {
//             iconName = focused
//                 ? 'pluscircleo'
//                 : 'pluscircleo';
//         } else if (route.name === 'TrackCreate') {
//             iconName = focused ? 'pluscircleo' : 'pluscircleo';
//         }

//         // You can return any component that you like here!
//         return <AntDesign name={iconName} size={size} color={color} />;
//     },
// })