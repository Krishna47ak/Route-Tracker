import { useContext } from 'react';
import { View, Button, TextInput } from 'react-native';
import { Context as LocationContext } from '../context/location-context';
import useSaveTrack from '../hooks/useSaveTrack';

export default function TrackForm() {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [ saveTrack ] = useSaveTrack()
    return (
        <View className=" mt-10">
            <View className='bg-blue-500 rounded-lg my-5 py-2 px-2'>
                <TextInput placeholder='Enter the Track Name' value={name} onChangeText={changeName} />
            </View>
            <View>
                <Button title={recording ? 'Pause' : 'Start recording'} onPress={recording ? stopRecording : startRecording} />
            </View>
            <View className='my-5' >
                {!recording && locations.length ? <Button title='Save Recording' onPress={saveTrack} color={'red'} /> : null}
            </View>
        </View>
    );
}

