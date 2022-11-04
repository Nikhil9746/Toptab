import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
} from 'react-native'


export default class Qnblank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>QN Blank</Text>

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    }
})