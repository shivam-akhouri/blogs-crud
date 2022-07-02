import React from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function AddButton(props){
    return(
        <TouchableOpacity style={styles.button} onPress={()=>props.onClick()}>
            <MaterialCommunityIcons name="plus" color="white" size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        backgroundColor: "#3B70F2",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 100,
        bottom: 20,
        right: 20,
    }
})