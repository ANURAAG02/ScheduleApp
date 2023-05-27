import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
// import ScheduleApp from './src/screen/scheduleApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home';





const Stack = createNativeStackNavigator


const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ScheduleApp" component={ScheduleApp} /> */}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Main =()=>{
  return (
    <SafeAreaView>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={{justifyContent:'center', alignItems:'center', fontSize:40}}>Calendar</Text>
      {/* <Calendar
       style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      }}
      current={'2012-03-01'}
      onDayPress={day=>{console.log('select day', day)}}
      markedDates={{
        '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-03-02': {marked: true},
        '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
      }}
      theme={{
        backgroundColor: '#0000',
        calendarBackground: '#0000',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
      }}/>    */}
    <TouchableOpacity
    title='press here'
    onPress={()=>navigation.navigate('ScheduleApp')}
    style={{}}>
      <Text>Press Here</Text>
    </TouchableOpacity>
    </View>
      </SafeAreaView>
  )
}



export default App;