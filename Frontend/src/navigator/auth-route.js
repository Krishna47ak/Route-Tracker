import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/signup-screen';
import SigninScreen from '../screens/signin-screen';
import BottomRoot from './bottom-tab-route';
export default function AuthRoot() {
    const Auth = createNativeStackNavigator();
    return (
        <Auth.Navigator initialRouteName='Signup'>
            <Auth.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
            <Auth.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            {() => (
                <Auth.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            )}
        </Auth.Navigator>
    )
}