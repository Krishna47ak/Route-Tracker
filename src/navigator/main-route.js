import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomRoot from './bottom-tab-route';
import AuthRoot from './auth-route';
import ResolveAuth from '../screens/resolve-auth-screen';

export default function MainRoot() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Resolve' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Resolve" component={ResolveAuth} />
            <Stack.Screen name="Auth" component={AuthRoot} />
            <Stack.Screen name="Bottom" component={BottomRoot} />
        </Stack.Navigator>
    )
}