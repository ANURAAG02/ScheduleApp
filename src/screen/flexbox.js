import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable } from "react-native";
import { TouchableHighlight } from "react-native";

const Flexbox = ({navigation}) => {

    const [modal, setModal] = useState(false)
    const [button, setButton] = useState(1)
    const radioButton = [
        {
            id: 1,
            name: 'Java'
        },

        {
            id: 2,
            name: 'JavaScript'
        },

        {
            id: 3,
            name: 'python'
        },

        {
            id: 4,
            name: 'Ai'
        },

        {
            id: 5,
            name: 'Reactnative'
        },

        {
            id: 6,
            name: 'ReactJs'
        },
    ]
    return (
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}>
                    <Pressable
                        // onPress={()=>console.warn("normal press")}
                        onLongPress={() => console.warn("long press")}
                        // delayLongPress={5000}
                        onPressIn={() => console.warn("press in")}
                        onPressOut={() => { console.warn(" press out") }}

                    >
                        <Text style={styles.pressableBtn}>Press</Text>
                    </Pressable>
                </View>
                <View style={styles.innerBox2}></View>
                <View style={styles.innerBox3}></View>
            </View>

            <View style={styles.box2}>
                <TouchableHighlight>
                    <Text style={styles.Button1}>Button 1</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => (console.log("hello hi"))}>
                    <Text style={[styles.Button1, styles.success]}>Button 2</Text>
                </TouchableHighlight>

                <TouchableHighlight
                onPress={()=>navigation.navigate("StatusComponent")}>
                    <Text style={styles.Button1}>Button 3</Text>
                </TouchableHighlight>

                <ActivityIndicator size={100}
                    color='blue'
                    animating={false} />
                

            </View>

            <View style={styles.box3}>
                {
                    radioButton.map((item, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => setButton(item.id)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.radio}>
                                    {

                                        button === item.id ? <View style={styles.BG}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioButton1}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                <Modal
                    transparent={true}
                    visible={modal}
                    animationType="fade"
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello!</Text>
                            <Button
                                title="close modal"
                                onPress={() => setModal(false)} />
                        </View>
                    </View>
                </Modal>
                <Button
                    title="press"
                    onPress={() => setModal(true)}
                />
            </View>

        </View>
    )
}






const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: '#cd5c5c',
        flexDirection: 'row'
    },

    box2: {
        flex: 1,
        backgroundColor: '#3cb371'
    },

    box3: {
        flex: 1,
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    innerBox1: {
        flex: 1,
        backgroundColor: 'black',
        margin: 10
    },

    innerBox2: {
        flex: 1,
        backgroundColor: 'green',
        margin: 10
    },

    innerBox3: {
        flex: 1,
        backgroundColor: 'brown',
        margin: 10
    },

    Button1: {
        backgroundColor: '#bbb',
        color: '#000',
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        shadowColor: '#ffff',
        shadowOpacity: 10,
    },

    success: {
        backgroundColor: 'black',
        color: '#fff'
    },

    radioButton1: {
        fontSize: 20,
        justifyContent: 'center'

    },

    radio: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },

    BG: {
        backgroundColor: "black",
        height: 12,
        width: 12,
        borderRadius: 6,
        margin: 3
    },
    centeredView: {

        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },

    modalView: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 5,
        width: '70%'
    },

    modalText: {
        fontSize: 30,
        textAlign: "center",
        margin: 5
    },

    pressableBtn: {
        backgroundColor: '#2f4f4f',
        color: 'white',
        textAlign: 'center',
    }

})
export default Flexbox;