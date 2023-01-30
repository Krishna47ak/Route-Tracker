// import '../_mockLocation'
import { useContext, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Context as LocationContext } from '../context/location-context';
import Map from '../components/map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/track-form';

export default function TrackCreate() {
  const isFocused = useIsFocused()
  const { state:{ recording } , addLocation } = useContext(LocationContext)
  const callback = useCallback((location) => addLocation(location, recording),[recording])
  const [ errorMsg ] = useLocation( isFocused || recording , callback )

  return (
    <ScrollView className="flex-1 bg-blue-600 p-5">
      <Text className="text-3xl font-semibold mt-20 ml-2">Create Track</Text>
      <View className="mt-5">
        <Map />
        {errorMsg ? <Text>Please enable location services</Text> : null}
      </View>
      <View>
        <TrackForm/>
      </View>
    </ScrollView>
  );
}

