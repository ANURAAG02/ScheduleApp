import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { SectionList } from "react-native";
import UserData from "../../component/UserComponent";


class App extends React.Component{
    render(props){
      console.log(props)
        return (
            <View>
                <Text>Class</Text>
                <Text>{props.name}</Text>
            </View>
        )
    }
}



const LoginScreen = () => {


    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [number, setNumber] = useState()
    const [secure, setSecure] = useState(true)



    const clear = () => {
        setName('');
        setEmail('');
        setPassword('');
        setNumber('');
        setShow(false)
    }

    const toggle = () => {
        setSecure(!secure)
    }

    const Users1 = [
        {
            id: 1,
            name: "Anurag",
            age : 31,
            data : ["java", "data","php"]
        },
        {
            id: 2,
            name: "diya",
            age :29,
            data : ["java", "data","php"]


        },
        {
            id: 3,
            name: "Anurag",
            age : 31,
            data : ["java", "data","php"]



        },
        {
            id: 4,
            name: "diya",
            data : ["java", "data","php"]

        },
        {
            id: 5,
            name: "Anurag",
            age : 31,


        },
        {
            id: 6,
            name: "diya"
        },
        {
            id: 7,
            name: "Anurag",
            age : 31

        },
        {
            id: 8,
            name: "diya"
        },
        {
            id: 9,
            name: "Anurag",
            age : 31

        },
        {
            id: 10,
            name: "diya"
        },
    ]
    return (

        <View>
            <App name ={"ANurag"}/>
            <Text>Welcome to LOGIN screen</Text>
            <ScrollView style={{marginBottom:30, marginTop:0}}>

                <TextInput
                    placeholder="Enter your name here"
                    style={styles.textInputContainer}
                    onChangeText={(text) => {
                        setName(text)
                    }}
                    value={name} />
                <TextInput
                    placeholder="Enter your Email here"
                    style={styles.textInputContainer}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                    value={email} />
                <TextInput
                    placeholder="Enter your Password here"
                    style={styles.textInputContainer}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                    secureTextEntry={secure}
                    value={password} />
                <TextInput
                    placeholder="Enter your Contact Number here"
                    style={styles.textInputContainer}
                    onChangeText={(text) => {
                        setNumber(text)
                    }}
                    value={number}
                    maxLength={10}
                    keyboardType="phone-pad" />

                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
                        <Text>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setShow(clear)}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setSecure(toggle)}>
                        <Text>{secure ? 'show' : 'hide'}</Text>
                    </TouchableOpacity>
                </View>

                {
                    show ?
                        <View>
                            <Text>{name}</Text>
                            <Text>{email}</Text>
                            <Text>{password}</Text>
                            <Text>{number}</Text>
                        </View>
                        : null
                }

                {/* <FlatList
                data = {Users1}
                renderItem={({item})=><Text>{item.name}</Text>}
                keyExtractor = {item=>item.id}/> */}

                {/* {
                    Users1.map((item) => <UserData item={item} data = "AnuragRaut" power = 'power'/>
                
                    )
                } */}

                {/* <SectionList
                    sections={Users1}
                    renderItem={(item)=> <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.age}</Text>
                        <Text style={styles.text}>{item.id}</Text>
                        </View>}
                    renderSectionHeader={({section:{name}})=>{<Text>{name}</Text>}}/> */}
            </ScrollView>
        </View>
 
    )
}



const styles = StyleSheet.create({
    textInputContainer: {
        borderWidth: 2,
        borderColor: "red",
        margin: 10
    },
    buttonStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 10,
    },
    button: {
        borderWidth: 1,
        padding: 5,
        margin: 5,
        textAlign: 'center',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 10

    },
    text: {
        fontSize: 30,
        color: 'blue',
        borderWidth: 1,
        width: '90%',
        margin:10,
        padding:10,
        textAlign:'center'
    }

})
export default LoginScreen;







