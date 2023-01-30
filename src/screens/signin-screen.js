import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/auth-context';

export default function SignupScreen({ navigation }) {
  const {state, signin} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View className="flex-1 justify-center px-6">
      <Text className='text-3xl font-semibold ml-1 mb-5'>Signin to your account</Text>
      <View className='mt-10' >
        <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Input label='Password' value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        {state.errorMessage? <Text className="text-red-500 text-sm ml-3">{state.errorMessage}</Text>:null}
      </View>
      <View className='mt-10'>
        <Button title='Signin'
          buttonStyle={{
            borderRadius: 30,
          }}
          onPress={() => signin({email, password}, () => navigation.navigate("Bottom"))}
        />
      </View>
      <TouchableOpacity className='mt-3 ml-3 w-40' onPress={() => navigation.navigate('Signup')}>
        <Text className='text-blue-500 text-sm' >Don't have an account? Go back to Sign up </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

