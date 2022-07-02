import { addDoc, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'
import {todoCollection, db} from './store'

/* ------------------------------- Create ToDo ------------------------------ */

function makeTodo(title, description, cb){
    addDoc(todoCollection, {
        title,
        description,
        createdAt: new Date()
    }).then(res=>cb({
        status: "success",
        id: res.id
    }))
    .catch(err=>cb({
        status: "error",
        message: err
    }))
}

/* -------------------------------- Read ToDo ------------------------------- */

function getTodos(cb){
    var result = []
    const q = query(todoCollection)
    
    onSnapshot(q, res=>{
        res.forEach(doc=>{
            result.push({ ...doc.data(), id: doc.id})
        })
        cb({
            status: "success",
            data: result
        })
        result = []
    })
}

/* ------------------------------- Update ToDo ------------------------------ */
function updateTodo(id, done, cb){
    updateDoc(doc(db, "todos", id), {status: done})
    .then(_=>cb({
        status: "success"
    }))
}


/* ------------------------------- Delete Todo ------------------------------ */
function deleteTodo(id, cb){
    console.log("deleting todo")
    deleteDoc(doc(db, "todos", id))
    .then(res=>cb({
        status: "success"
    }))
}

export {makeTodo, getTodos, deleteTodo, updateTodo}