import React,{useState} from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { TouchableOpacity } from 'react-native';


const Practice = ({navigation}) =>{

    const [data, setData] = useState("Anu")
    let name = "Anurag"
    let age = 29
     
    return (
        <View style={styles.container}>
           
            <View style={styles.container}>

            <Text style={styles.heading}>Anuraag Blogs Code</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("LoginScreen")}>
                <Text>Next</Text>
            </TouchableOpacity>

        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1
    },

    heading:{
        fontSize:30,
        padding:5,
        margin:5,
        
    },
    button:{
        borderWidth:1,
        padding:5,
        margin:5,
        textAlign:'center',
        alignItems:'flex-end',
        justifyContent:'center'
        
    }
})
export default Practice;