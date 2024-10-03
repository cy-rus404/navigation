import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

function HomeScreen({navigation}){
  return(
    <View style={{ alignItems:'center'}}>
      <Text>Hello</Text>
      <Button title='Go to details' onPress={()=> navigation.navigate('Details')}/>
    </View>
  )
}

function DetailsScreen({navigation}){
  return(
    <View style={{alignItems:'center'}}>
      <Text>Details Screen</Text>
      <Button onPress={()=> navigation.navigate('Home')}/>
    </View>
  )
}

 const Stack = createNativeStackNavigator();

function App(){
  <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Home'>
      <Stack.Screen name= 'Home' component={HomeScreen}/>
      <Stack.Screen name= 'Details' component={DetailsScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
}

export default App;