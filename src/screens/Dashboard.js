import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function FeedScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Taskks!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function EventsScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}


const Tab = createBottomTabNavigator(); 

export default function Dashboard() {
  return (
      <NavigationContainer independent = {true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Feed') {
                iconName = focused
                  ? 'dynamic-feed'
                  : 'dynamic-feed';
              } else if (route.name === 'Notifications') {
                iconName = 'notifications';
              } else if (route.name === 'Post') {
                iconName = 'add';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account-circle' : 'account-circle';
              }

  
              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Feed" component={FeedScreen}/>
          <Tab.Screen name="Post" component={EventsScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}
