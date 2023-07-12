import React,{useRef,useState}from "react";
import { View, Text, StyleSheet,TextInput,Button } from "react-native";


const ReferenceComponent = ({ navigation }) => {

    const [name,setName] = useState("")
    const input = useRef();
    const updateInput=()=>{
        console.log("Updated input");
        input.current.focus()
        input.current.setNativeProps({
            fontSize:20,
            color:'red'
        })
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30,textAlign:"center",margin:20}}>Reference Component</Text>

            <View>
                <TextInput 
                    ref={input}
                    style={styles.textBox}
                    placeholder="Enter Name"
                    onChangeText={(text)=>{setName(text)}} />
                <TextInput 
                    style={styles.textBox}
                    placeholder="Enter Email" />
            </View>
            <View style={{padding:5,margin:10}}>
                <Button 
                title="Update Input"
                onPress={updateInput}/>
                </View>
                <Text>{name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"center",
        // alignItems: 'center'
    },
    textBox: {
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        margin:10
    }
})
export default ReferenceComponent;


