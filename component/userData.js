import React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";


const UserData = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);
    const [show,setShow] = useState(true)


    useEffect(() => {
        console.warn('do some animation here: ', { count })
    }, [count])

    useEffect(() => {
        console.warn('call API here: ', { data })
    }, [data])


    return (
        <View>
            <Text style={{ color: 'red', fontSize: 30 }}>Counter: {count}</Text>
            <Text style={{ color: 'red', fontSize: 30 }}>Data: {data}</Text>

            <Button
                title="update Counter"
                onPress={() => setCount(count + 2)}
            />

            <Button
                title="update Data"
                onPress={() => setData(count + 2)}
            />

            {/* <User data={{ data, count }} /> */}
            {/* <ShowHide/> */}

            <View>
                {/* <Text style={{ color: 'green', fontSize: 40 }}>Component</Text> */}
                <Button
                    title="Hide"
                    onPress={()=>setShow(false)} />

                <Button
                    title="Show"
                    onPress={()=>setShow(true)} />

                   <Button 
                   title="toggle"
                   onPress={()=>setShow(!show)}/>
                   
                   {
                      show ? (<ShowHide/> ):null
                  }
            </View>
        </View>

    )

}


const User = (props) => {

    console.log(props.data)
    useEffect(() => {
        console.warn("data updated")
    }, [props.data.data])
    const name = 'Anurag'
    return (
        <Text style={{ color: 'black', fontSize: 30 }}>{props.data.data}</Text>

    )
}

const ShowHide =()=>{
    // let timer = setInterval(()=>{
    //     console.warn("setInterval")
    // }, 2000)
    // useEffect(()=>{
    //     return ()=> clearInterval(timer)
    // })
    return(

        <View>
            <Text style={{fontSize:30, color:'blue'}}>Show/Hide Component</Text>
        </View>
    )
}
export default UserData;