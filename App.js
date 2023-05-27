import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import ScheduleApp from './src/screen/scheduleApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleApp from './src/screen/scheduleApp';
import CalendarApp from './calendar';
import Styles from './Style';




const Stack = createNativeStackNavigator();


const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ScheduleApp" component={ScheduleApp} /> */}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ScheduleApp" component={ScheduleApp} />
        <Stack.Screen name="CalendarApp" component={CalendarApp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Main =({navigation})=>{
  return (
    <SafeAreaView>
        {/* <View style={Styles.container}> */}
        <View>


            {/* <View style={Styles.text}> */}
            <View>
                <Text style={{fontSize:40}}>Login</Text>
            </View>


            {/* <View style={Styles.TextInput}> */}
            <View>
              <TextInput
                  placeholder='Email'>
              </TextInput>  
              <TextInput
                  placeholder='Password'>
              </TextInput>  
            </View>



            {/* <View style={Styles.buttonContainer}> */}
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate('ScheduleApp')}>
                <Text>Event Sheduler</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('CalendarApp')}>
                <Text>Calendar</Text>
              </TouchableOpacity>
            </View>

        </View>
      </SafeAreaView>
  )
}



export default App;


