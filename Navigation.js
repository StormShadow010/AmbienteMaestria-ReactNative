import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import Stack from './screens/Stack';

const MyCustomHeaderBackImage = () => (
    <Image
      source={require('../PyproMaestria/images/arrow.png')}
      style={{width: 70, height: 70}}
    />
  );

const HomeStackNavigator= createStackNavigator();

function MyStack(){
    return(
    <HomeStackNavigator.Navigator>
        <HomeStackNavigator.Screen name="HomeScreen" component={Home}/>
        <HomeStackNavigator.Screen 
            name="Stack" 
            component={Stack}
            options={{
                headerBackImage: MyCustomHeaderBackImage,
                headerStyle: {
                    backgroundColor: '#1790EF',
                    shadowColor: 'transparent',
                  },
            }}
        />
    </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Homeee" 
                component={MyStack}
                options={{
                    headerShown:false,
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Setting}
                options={{

                }}
            />
        </Tab.Navigator>
    )
}


export default function Navigation() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  )
}


