import React, {Component} from "react";

import { View,StyleSheet,Text, Button} from "react-native";
import { TextInput } from "react-native";
import Student from "./student";


class Notify extends Component {

    constructor (){
        super();
        this.state={
            name:'Anurag',
            age:28
        }
    }
    updateName (val){
        this.setState({age:val})
        this.setState({name:val})
    }
    render (){
        return (
            <View styles= {styles.container}>
                <Text style = {styles.text}>
                    Welcome to the class component
                </Text>
                <Text>{this.state.name} {this.state.age}</Text>
                <Button
                title="Press here"
                onPress = {this.fruit}/>
                <Student name={this.state.name}/>
                <TextInput 
                    placeholder="type here"
                    onChangeText={(text)=>this.updateName(text)}
                />
            </View>
        )
    }
}

let name = 'Anureag'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },

    text:{
        fontSize:60
    }
})
export default Notify;
