import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button, TextInput } from "react-native";
import { useState } from "react";
import { isTemplateExpression } from "typescript";
import { getProfileData } from "react-native-calendars/src/Profiler";


const GetAPIData = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false)
     const [data,SetData] =useState([])


    const GetData = async () => {

        const url = "http://localhost:3000/users";
        let result = await fetch(url)
        result =await result.json();

        if(result ){
            SetData(result)
        }
        console.warn(result)


        useEffect(()=>{
            GetData()
        },[])


    return (

        <View style={styles.container}>
            <Text style={styles.text}>APIs</Text>
            <TextInput style={styles.inputField} placeholder="name" onChangeText={(text) => setName(text)} />
            <TextInput style={styles.inputField} placeholder="email" onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.inputField} placeholder="password" onChangeText={(text) => setPassword(text)} secureTextEntry={true} />


            <Button title="Save API" />
            <Button title="Show" onPress={() => setShow(true)} />
            <Button title="Hide" onPress={() => setShow(!show)} />


            {/* {
                show ? <View>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{password}</Text>
                </View>
                    : null
            } */}


        </View>
    )



}
}


const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'red'
    },
    inputField: {
        borderWidth: 1,
        width: '75%',
        padding: 5,
        margin: 10
    }
})
export default GetAPIData;