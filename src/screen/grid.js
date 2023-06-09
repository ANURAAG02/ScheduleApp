import React from "react";
import { View, Text, StyleSheet } from "react-native";


const GridApp = ()=>{
    return (
        <View>
            <Text style={{fontSize:30}}>
                Grid With Dyanmic Data
            </Text>

           <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            <Text style={styles.item}>Anurag</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        backgroundColor:`#2f4f4f`,
        fontSize:25,
        height:120,
        width:120,
        borderWidth:1,
        textAlignVertical:'center',
        textAlign:'center',
        margin:5,
        padding:5
    }
})
export default GridApp;


