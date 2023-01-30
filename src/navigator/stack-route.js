import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackList from '../screens/track-list-screen';
import TrackDetail from '../screens/track-detail-screen';

export default function StackRoot() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='TrackList'>
            <Stack.Screen name="TrackList" component={TrackList} options={{ headerShown: false }} />
            <Stack.Screen name="TrackDetail" component={TrackDetail}/>
        </Stack.Navigator>
    )
}