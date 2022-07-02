import React, { useRef, useState } from 'react'
import {Animated, View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { deleteTodo, updateTodo } from '../../utils/opeartions';
export default function TodoItem(props){
    const growAnim = useRef(new Animated.Value(0)).current;
    const [opened, setOpened] = useState(false);

    const showDesc = ()=>{
        setOpened(true);
        Animated.timing(growAnim, {
            toValue: 500,
            duration: 1000,
            useNativeDriver: false,
        }).start()
    }
    const hideDesc = ()=>{
        Animated.timing(growAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start()
        setOpened(false);
    }

    return (
        <>
        <TouchableOpacity onLongPress={()=>updateTodo(props.id, props.status=="completed" ? "left":"completed", console.log)} onPress={opened === false ?showDesc: hideDesc} style={
            [styles.container, {backgroundColor: props.status === "completed"? "#80e0a7": "white"}]}>
            <View style={{flexDirection: "row", width: "100%"}}>

            <Text style={styles.text}>{props.title}</Text>
            <TouchableOpacity onPress={()=>deleteTodo(props.id, console.log)}>
                <MaterialCommunityIcons name="delete" color={"#cf7474"} size={25} />
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <Animated.View style={[styles.desc, {maxHeight: growAnim}]}>
            <Text style={{width:Dimensions.get("window").width-40,fontFamily: "Roboto_300Light",paddingVertical: 10,}}>{props.desc}</Text>
        </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        minHeight: 65,
        borderRadius: 7,
        backgroundColor: "white",
        justifyContent:"center",
        marginTop: 5,
        borderLeftWidth: 5,
        borderLeftColor: "#648EF5",
        paddingHorizontal: 10,
        paddingVertical: 15,
        elevation: 3,
    },
    text:{
        fontFamily: "Roboto_500Medium", 
        color: "black",
        fontSize: 22,
        width: "87%",
    },
    desc:{
        width:"100%",
        alignSelf:"center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: "#1e2f9740",
    }
})