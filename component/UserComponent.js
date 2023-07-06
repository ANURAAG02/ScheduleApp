import React from "react"
import { Text,View,StyleSheet } from "react-native"

const UserData = (props)=>{
    const power = props.power
      return (
          <View>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.age}</Text>
          <Text style={styles.text}>{props.item.id}</Text>
          <Text style={styles.text}>{props.data}</Text>
          <Text style={styles.text}>{power}</Text>
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
    });

  export default UserData;