import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button, Modal, Pressable, StatusBar, Platform, ScrollView, FlatList, TextInput } from "react-native";
import UserModal from "../../component/UserModal";

const App = ({ navigation }) => {


    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)
    const getApiData = async () => {
        const url = "http://192.168.29.254:3000/UserData"
        let result = await fetch(url)
        result = await result.json()
        if (result) {
            setData(result)
        }
    }



    const deleteUser = async (id) => {
        const url = "http://192.168.29.254:3000/UserData"
        console.log(`${url}/${id}`)
        let result = await fetch(`${url}/${id}`, {
            method: "delete",
        })
        result = await result.json();
        if (result) {
            getApiData()
        }
    }


    useEffect(() => {
        getApiData();
    }, [])

    const usr = (data) => {
        setShow(true)
        setSelectedUser(data)
    }

    const [userData,setUserData] = useState([])

    const searchUser = async (text)=>{
        console.log(text)
        const url = `http://192.168.29.254:3000/UserData?q=${text}`
        console.log(url)
        let result = await fetch(url)
        result = await result.json()

        if(result){
            setUserData(result)
        }
    }




    return (
        <ScrollView style={styles.container}>

            <Button title="refrence" onPress={()=>navigation.navigate("ReferenceComponent")}/>

            <TextInput
                style={{ borderRadius: 10, borderWidth: 2, backgroundColor: 'skyblue', margin: 5 }}
                placeholder="search"
                onChangeText={(text)=>{searchUser(text)}}
            />


            {
                userData.length ? userData.map((item)=> 
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'white'}}>{item.name}</Text>
                            <Text style={{color:'white'}}>{item.age}</Text>
                            <Text style={{color:'white'}}>{item.email}</Text>
                        </View>

                ) :null
            }
            <Text style={{ fontSize: 30, textAlign: 'center' }}>Data</Text>

            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>id</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>Name</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>Age</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>Email</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>Delete</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 15 }}>Update</Text></View>
            </View>

            {
                data.length ? data.map((item) =>
                    <View style={styles.wrapper}>





                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 30 }}>{item.id}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15 }}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15 }}>{item.age}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15 }}>{item.email}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button title="Delete"
                                onPress={() => deleteUser(item.id)} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button title="Update"
                                onPress={() => usr(item)} />
                        </View>

                        <Modal visible={show} transparent={true}>
                            <UserModal
                                setShow={setShow}
                                selectedUser={selectedUser}
                                getApiData={getApiData()} />
                        </Modal>
                    </View>
                )


                    : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <ActivityIndicator

                            size={50} />
                    </View>
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textBox: {
        borderWidth: 2,
        borderColor: 'skyblue',
        padding: 10,
        margin: 10,
        fontSize: 20,
        marginBottom: 5
    },
    error: {
        color: "red",
        paddingLeft: 10,
        fontSize: 15
    },
    wrapper: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        margin: 5,
        padding: 5,
        borderRadius: 10

    },
    container: {
        backgroundColor: 'black'
    },


})
export default App;