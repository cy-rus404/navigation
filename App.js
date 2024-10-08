import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

function HomeScreen({navigation}){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title='Click Me' onPress={()=> navigation.navigate('Detail')}/>
    </View>
  )
}

function DetailsScreen({navigation}){
  return(
    <View>
      <Text>Details Screen</Text>
      <Button title='Click Me' onPress={()=> navigation.navigate('Home')}/>

    </View>
  )
}

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Detail' component={DetailsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;