import React,{useState} from "react";
import { useEffect } from "react";
import { View,StyleSheet,Text } from "react-native";
import { FlatList } from "react-native";


const GetAPIDataInList = ()=>{

const [data, setData] =useState([false])
    const getAPIData =async ()=>{
        const url = "http://localhost:3000/users";
        let result = await fetch(url);
        result = await result.json();
        console.warn(result)
        setData(result)
    }

    useEffect(()=>{
        getAPIData()
    },[])


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to API call</Text>
            {
                data.length ? data.map((item)=><View>
                    <Text>{item.name}</Text>
                </View>)
                :null
            }
            {/* <FlatList 
                data= {result}
                renderItem={(item)=>item}/> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:{
        fontSize:30,
        color:'red'
    }
})

export default GetAPIDataInList;