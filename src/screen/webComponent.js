import React from "react";
import { View } from "react-native/types";
import WebView from "react-native-webview";


const Blogs = () =>{
    return (
        <WebView 
            source={{uri:"https://anuraagblogs14.wordpress.com/"}}/>
    )
}

export default Blogs;