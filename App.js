import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import ScheduleApp from './src/screen/scheduleApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleApp from './src/screen/scheduleApp';
import CalendarApp from './calendar';
import MapScreen from './src/screen/mapScreen';
import { enableLatestRenderer } from 'react-native-maps';
import Data from './component/data';
import styles from './Style';
import FlatlistApp from './src/screen/flatlist';
import GridApp from './src/screen/grid';
import Notify from './component/notify';
import UserData from './component/userData';
import Flexbox from './src/screen/flexbox';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ScheduleApp" component={ScheduleApp} /> */}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ScheduleApp" component={ScheduleApp} />
        <Stack.Screen name="CalendarApp" component={CalendarApp} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="FlatlistApp" component={FlatlistApp} />
        <Stack.Screen name="GridApp" component={GridApp} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="Flexbox" component={Flexbox} />







      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Main = ({ navigation }) => {

  const [name, setName] = useState("")
  return (
      <ScrollView>
    <SafeAreaView>
      <View>




        <View>
          <Text style={{ fontSize: 40 }}>Hi! How you doing? {name}</Text>
        </View>



        <View style={styles.input}>
          <TextInput style={styles.textInput}
            placeholder='Email'
            value={name}
            onChangeText={(text) => setName(text)}>
          </TextInput>
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            keyboardType='numeric'
          >
          </TextInput>

          <View style={styles.loginContainer}>


            <TouchableOpacity style={styles.loginButton} value={name} onPress={() => setName('')} >
              <Text style={styles.text}>login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity>
            <Text style={styles.text}>forget password</Text>
          </TouchableOpacity>


        </View>



        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScheduleApp')}>
            <Text style={[styles.text, { color: 'red', fontSize: 20 }]}>Event Sheduler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CalendarApp')}>
            <Text style={styles.text}>Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MapScreen')}>
            <Text style={styles.text}>MapScreen</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Data')}>
            <Text style={styles.text}>Data</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
      </ScrollView>
  )
}




enableLatestRenderer();
export default App;


