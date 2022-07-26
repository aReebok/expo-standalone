import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from "expo-google-app-auth";

// source: https://aravindkumarvemula.medium.com/google-authentication-using-react-expo-6be317d84084

export default function App() {
  const [uname, setUname] = useState('NULL');

  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `83414050974-l5scuc1sku5696vgq3hd7ntkmbtmran1.apps.googleusercontent.com`,
        androidStandaloneAppClientId: `83414050974-hla7fl5u5pn210ahhiv6i08avb512e1e.apps.googleusercontent.com`
      });
      console.log(user);
      if (type === "success") {
        console.log("User.email is : " + user.email);
        setUname(user.email);  
        console.log("LoginScreen.js 17 | success, navigating to profile");
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Click below to login!</Text>
      <Button title='Sign in Using Google' 
        onPress={() => signInAsync()}/>
      <Text>Current User Email: {uname}.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
