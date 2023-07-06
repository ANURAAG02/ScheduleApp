import React from "react";
import { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    StatusBar,
    Platform
} from "react-native";
import { ScrollView } from "react-native";

const StatusComponent = () => {

    const [hide, setHide] = useState(false);
    const [barStyle, setBarStyle] = useState("default")
    return (



        <ScrollView>

        <View style={styles.container}>
            <Text style={styles.statusBarText}>Status Bar</Text>
            <StatusBar
                backgroundColor='#6495ed'
                barStyle={barStyle}
                hidden={hide} />
            <Button
                title="toggle statue bar"
                onPress={() => setHide(!hide)} />
            <Button
                title="update style"
                onPress={() => setBarStyle("dark-content")} />

            <View>
                <Text style={{ fontSize: 30 }}> Platform : {Platform.OS}</Text>
                {
                    Platform.OS =="ios" ? 
                    <View style={{height:100,width:100,backgroundColor:'red'}}></View>
                    :
                    <View style={{height:100,width:100,backgroundColor:'green'}}></View>
                }
              
            </View>
            <Text style={styles.text}>{JSON.stringify(Platform)}</Text>


        </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center'
    },
    statusBarText: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    text:{
        color:Platform.OS=="ios"? "orange":"blue",
        fontSize:Platform.OS == "android"? 20 : 30
    }
})
export default StatusComponent;