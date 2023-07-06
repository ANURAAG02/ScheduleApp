import React from "react"
import { View, SafeAreaView, Text } from "react-native";
import { Calendar } from "react-native-calendars";




const CalendarApp =()=>{
    return (
      <SafeAreaView>
        <View>
        <Text style={{fontSize:40}}>Calendar</Text>
        <Calendar
         style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350
        }}
        current={'2023-05-27'}
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
        }}/>   
      
      </View>
        </SafeAreaView>
    )
  }
  

  export default CalendarApp;