import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda, DateData } from 'react-native-calendars';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import testIDs from '../testIDs';


const timeToString = ()=>{
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}


const ScheduleApp=({navigation})=>{
  const [items,SetItems] = useState([]);
  
  loadItems = (day) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      SetItems(newItems)
    }, 1000);
  }


    return (
      <Agenda
        // testID={testIDs.agenda.CONTAINER}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        />
      )
    }
        


  loadItems = (day) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };

  renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        // testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

//   rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name;
//   };

//   timeToString(time) {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

export default ScheduleApp;



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

