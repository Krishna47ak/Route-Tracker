import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Context as AuthContext } from '../context/auth-context';

export default function Account({navigation}) {
  const { signout} = useContext(AuthContext)
  return (
    <View className="flex-1 bg-blue-600 justify-center items-center">
      <Text>Open Sign in by Ananda! account</Text>
      <Button title='Sign Out' onPress={() => signout(() => navigation.navigate('Auth'))} />
      <StatusBar style="auto" />
    </View>
  );
}

