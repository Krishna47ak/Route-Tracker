import { useContext, useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Context as TrackContext } from '../context/track-context';

export default function TrackList({ navigation }) {
  const { state, fetchTracks } = useContext(TrackContext)
  useFocusEffect(useCallback(() => {
    fetchTracks()
  }, []))
  console.log(state);
  return (
    <View className="flex-1 p-12 bg-blue-600">
      <Text className='mt-5 text-3xl font-bold text-center' >Tracks</Text>
      <FlatList
        className='mt-8'
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity className='flex-row my-1 bg-blue-700 p-2 px-3 rounded-md shadow-2xl items-center' onPress={() => navigation.navigate('TrackDetail', { _id: item._id})} >
              <Text className='text-lg' >{item.name}</Text>
              <View className='ml-auto' >
                <AntDesign name="right" size={18} color="black" />
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

