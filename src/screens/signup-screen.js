import { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/auth-context';

export default function SignupScreen({ navigation }) {
  const {state, signup, clearErrorMessage} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    navigation.addListener('focus', clearErrorMessage)
    navigation.addListener('blur', clearErrorMessage)
    
},[])
  return (
    <View className="flex-1 justify-center px-6">
      <Text className='text-3xl font-semibold ml-1 mb-5'>Signup for Tracker</Text>
      <View className='mt-10' >
        <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Input label='Password' value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        {state.errorMessage? <Text className="text-red-500 text-sm ml-3">{state.errorMessage}</Text>:null}
      </View>
      <View className='mt-10'>
        <Button title='Signup'
          buttonStyle={{
            borderRadius: 30,
          }}
          onPress={() => signup({email, password}, () => navigation.navigate("Bottom"))}
        />
      </View>
      <TouchableOpacity className='mt-3 ml-3 w-44'  onPress={() => navigation.navigate('Signin')}>
        <Text className='text-blue-500 text-sm' >Already have an account? Sign in instead</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

