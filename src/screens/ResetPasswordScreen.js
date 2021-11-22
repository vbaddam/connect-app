import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
// import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

import { Text } from 'react-native-paper'
import { Button } from 'react-native-paper'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button style = {{marginTop:20, marginLeft: 10, borderStyle: 'solid', borderColor: '#fff', borderWidth: 1, padding: 10, borderRadius: 10}}
        mode='outlined'
        onPress={() => navigation.navigate("LoginScreen")}
        >
            <Text
            style = {{color: '#fff'}}
            > Send Instruction </Text>
        </Button> 
    </Background>
  )
}
