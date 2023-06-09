import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";




const Data = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)
    const [pressed, setPressed] = useState(false)

    const clearFormData = () => {
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('')

    }


    return (
        <ScrollView alwaysBounceVertical={true}>
            <View>

                <Text style={{ fontSize: 30 }}> Hello</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter name here"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    maxLength={10} />

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter email here"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    maxLength={10} />

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter password here"
                    value={password}
                    secureTextEntry={pressed ? true : false}
                    onChangeText={(text) => setPassword(text)}
                    maxLength={10} />
                <TouchableOpacity style={{ margin: 10 }} onPress={(pressed) => setPressed(pressed)}>
                    <Text>View password</Text>
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.buttonContainer}
                        title="Print Value"
                        color={'green'}
                        onPress={() => setDisplay(true)} />

                    <Button
                        style={styles.buttonContainer}
                        title="Erase Value"
                        color={'green'}
                        onPress={clearFormData} />


                </View>
                <View>
                    {display ? <View>
                        <Text style={{ fontSize: 30 }}>{name}</Text>
                        <Text style={{ fontSize: 30 }}>{email}</Text>
                        <Text style={{ fontSize: 30 }}>{password}</Text>
                    </View> : null}

                </View>
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <TouchableOpacity style={styles.logIn} onPress={() => navigation.navigate('FlatlistApp')}>
                        <Text>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginh:15}}>
                        <Text>forget password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GridApp')}
                        style={{ borderWidth: 1, width: 50, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Grid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notify')}
                        style={{ borderWidth: 1, width: 50, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Notify</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('UserData')}
                        style={{ borderWidth: 1, width: 50, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>useEffect</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Flexbox')}
                        style={{ borderWidth: 1, width: 50, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Flexbox</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10
    },

    buttonContainer: {
        margin: 10
    },

    logIn: {
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
        justifyontent: 'center',
        alignItems: 'center',
        width: 50
    }
})

export default Data;