import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet,Text, View, SafeAreaView, Button} from 'react-native';
import firebase from "./src/utils/firebase";
import Auth from "./src/components/Auth";
import ListBirthday from "./src/components/LiistBirthday";
import "firebase/auth";
import LoginForm from './src/components/LoginForm';

export default function App(){
  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      setUser(response); 
    });
  },[]);

  if(user === undefined) return null;
  
  return(
    <>
    <StatusBar barStyle = "light-content"/>
      <SafeAreaView style={styles.background}>
        {user ? <ListBirthday />: <Auth />}
      </SafeAreaView>
      </>
  );
}




const styles = StyleSheet.create({
  background:{
    backgroundColor: "#15212b",
    height: "100%",
  },
   
})