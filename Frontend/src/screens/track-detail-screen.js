import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Context as TrackContext } from '../context/track-context';
import MapView, { Polyline } from 'react-native-maps';

export default function TrackDetail({ route: { params } }) {
  const { state } = useContext(TrackContext)
  const { _id } = params
  const track = state.find(tracks => tracks._id === _id)
  const initialCoords = track.locations[0].coords

  return (
    <View className="flex-1 bg-blue-600 justify-center items-center">
      <Text>{track.name}</Text>
      <MapView style={{ height: 300, width: 350 }}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.0017,
          longitudeDelta: 0.0017
        }}
      >
      <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

