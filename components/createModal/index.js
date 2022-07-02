import React, {useState} from "react";
import { Modal, StyleSheet, View ,Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {getTodos, makeTodo} from '../../utils/opeartions';

export default function CreateTodo(props){
    const [todo, setTodo] = useState({
        title:"", 
        description: ""
    })
    return (
    <KeyboardAvoidingView behavior="height" style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add ToDo</Text>
            <TextInput style={styles.input} placeholder="ToDo title" value={todo.title} onChangeText={(val)=>setTodo({
                ...todo,
                title: val
            })}/>
            <TextInput style={styles.input} placeholder="ToDo Description" value={todo.description} onChangeText={(val)=>setTodo({
                ...todo,
                description: val
            })}/>
            <TouchableOpacity style={styles.button} onPress={()=>{
                makeTodo(todo.title, todo.description,(res)=>{
                    if(res.status==="success"){
                        setTodo({
                            title: "",
                            description: ""
                        })
                        props.onClick()
                    }
                })
                // getTodos(res=>console.log(res.data))
            }}>
                <Text style={{color:"white"}}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      width: "95%",
      height: 400,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 100
    },
    button: {
      width: "90%",
      paddingTop: 20,
      backgroundColor: "#3B70F2",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical: 20,
      borderRadius: 15
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      fontFamily: "Roboto_900Black",
      fontSize: 35,
      marginTop:20,
      marginBottom: 30,
      textAlign: "center"
    },
    input:{
        borderWidth: 1, 
        borderColor: "black",
        width: "90%",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20
    }
  });