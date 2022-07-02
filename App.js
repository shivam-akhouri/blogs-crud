import { StyleSheet, View, StatusBar, Text, FlatList } from 'react-native';
import TodoItem from './components/todoItem';
import { useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic,
Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic,Roboto_700Bold,Roboto_700Bold_Italic,
Roboto_900Black,Roboto_900Black_Italic  } from '@expo-google-fonts/roboto';
import AddButton from './components/addButton';
import CreateTodo from './components/createModal';
import { useEffect, useState } from 'react';
import { getTodos } from './utils/opeartions';

export default function App() { 
  const [visible, setVisible] = useState(false);
  let fontsLoaded = useFonts({
    Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic,
    Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
  });
  const [data, setData] = useState([]);
  useEffect(()=>{
    getTodos((res)=>setData(res.data))
  }, [])
  if(!fontsLoaded){
    return <Text>Loading...</Text>
  }else{

    return (
      <View style={styles.container}>
        <View style={styles.headerBackground}>
          <Text style={styles.header}>My Todos</Text>
        </View>
        <FlatList style={{width: "100%", height: "90%",}} data={data} renderItem={({item})=>(
          <TodoItem title={item.title} desc={item.description} id={item.id} status={item.status} />
        )} contentContainerStyle={{alignItems: "center"}} />
        <AddButton onClick={()=>setVisible(!visible)}/>
        <CreateTodo visible={visible} onClick={()=>setVisible(!visible)}/>
        <StatusBar />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#eee',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    color: "white",
    letterSpacing: 2
  },
  headerBackground:{
    backgroundColor: "#3B70F2",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
  }
});
