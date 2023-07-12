import React,{useState,useEffect} from "react";
import { View,Button,TextInput,StyleSheet } from "react-native";


const UserModal = (props) => {
    const [name,setName] = useState(undefined)
    const [age,setAge] = useState(undefined)
    const [email,setEmail] = useState(undefined)


    const updateUser = async () => {
        console.log(name,age,email)
        const url = "http://192.168.29.254:3000/Users"
        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({name,age,email})
        })
        result = await result.json();
        if (result) {
            alert("Update Successfull")
            props.getApiData();
            props.setShow(false)
        }
    }

    useEffect(()=>{
        if(props.selectedUser){
            setName(props.selectedUser.name)
            setAge(props.selectedUser.age.toString())
            setEmail(props.selectedUser.email)
        }
    },[props.selectedUser])
    return (
        <View style={styles.outer}>
            <View style={styles.inner}>

                <View style={{marginBottom:10}}>
                <TextInput 
                    style={styles.textBoxContainer} 
                    placeholder="Name" value={name} 
                    onChangeText={(text)=>setName(text)}/>
                <TextInput 
                    style={styles.textBoxContainer} 
                    placeholder="Age" value = {age}
                    onChangeText={(text)=>setAge(text)}/>
                <TextInput 
                    style={styles.textBoxContainer} 
                    placeholder="Email" value={email}
                    onChangeText={(text)=>setEmail(text)}/>
                    </View>
                <View style={{marginBottom:5,borderRadius:10}}>

                    <Button title="Update" onPress={updateUser}/>
                    </View>
                <Button
                    title="close"
                    onPress={() => props.setShow(false)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'


    },

    inner: {
        backgroundColor: '#fff',
        padding: 10,
        // margin: 40,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
        width: 350,
        // height: 250,
    },
    textBoxContainer:{
        borderWidth:1,
        padding:10,
        margin:5,
        borderRadius:10
    }
})

export default UserModal;