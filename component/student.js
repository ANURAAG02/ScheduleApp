import React from "react";
import { View,Text } from "react-native";


class Student extends React.Component{
    render(){
        console.log(this.props)
        return (
            <View>
                <Text>student Component : {this.props.name}</Text>
            </View>
        )
    }
}

export default Student;