import React from 'react'
import { Button } from 'react-native-paper'
import {Text, View, ScrollView, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.icon}>
        <Icon
            name="user"
            style={{color: '#fff', fontSize: 40, marginBottom: 30}}
        />
        <Button style = {{marginTop:10, marginLeft: 10, borderStyle: 'solid', borderColor: '#fff', borderWidth: 1, padding: 10, borderRadius: 10}}
        mode='outlined'
        onPress={() => navigation.navigate("LoginScreen")}
        >
            <Text
            style = {{color: '#fff'}}
            > Login </Text>
        </Button>
        <Button style = {{marginTop:20, marginLeft: 10, borderStyle: 'solid', borderColor: '#fff', borderWidth: 1, padding: 10, borderRadius: 10}}
        mode='outlined'
        onPress={() => navigation.navigate("RegisterScreen")}
        >
            <Text
            style = {{color: '#fff'}}
            > Sign Up </Text>
        </Button> 
    </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
},
text: {
    fontSize: 20,
    color: 'blue',
},
icon: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
}

});
    
