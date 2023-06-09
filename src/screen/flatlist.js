import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";

const FlatlistApp = ({ navigation }) => {

    const user = [
        {
            id: 1,
            name: 'Anurag',
            email: 'anurag@123'
        },

        {
            id: 2,
            name: 'Diya',
            email: 'diya@123'

        },

        {
            id: 3,
            name: 'Ovi',
            email: 'ovi@123'

        },

        {
            id: 5,
            name: 'Ojas',
            email: 'ojas@123'

        },

        {
            id: 6,
            name: 'Raut',
            email: 'raut@123'

        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.textContainer}>

                    <Text style={styles.text}>Flatlist</Text>
                </View>


                <FlatList
                    data={user}
                    renderItem={({ item }) =>  <UserData item = {item}/>}
                    keyExtractor={item => item.id} />

                {
                    user.map((item) => <View style={styles.itemContainer}>
                        <Text style={styles.item1}>{item.name}</Text>
                        <Text style={styles.item2}>{item.email}</Text>

                    </View>)
                }
            </ScrollView>
        </View>
    )
}


const UserData = (props)=>{
    const item = props.item

    return (
        <View style={styles.itemContainer}>
<Text style={styles.item1}>{item.name}</Text>
<Text style={styles.item2}>{item.email}</Text>

</View>
    )
} 


const styles = StyleSheet.create({

    container: {
        // alignItems:'center',
        // justifyContent:'center'

    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 50,
        alignItems: 'center',
    },

    item1: {
        fontSize: 20,
        padding: 10,
        backgroundColor: "#008b8b",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: '40%'

    },

    item2: {
        fontSize: 20,
        padding: 10,
        backgroundColor: '#4682b4',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: '40%'

    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})
export default FlatlistApp;