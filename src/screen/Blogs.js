import React from 'react';
import {View,Text} from 'react-native'

const Dashboard = (props)=>{
    console.warn(props.route.params.age)

    const {name,age} = props.route.params
    return(
        <View>
            <Text>Blogs</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}

export default Dashboard;