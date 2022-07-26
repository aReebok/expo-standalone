import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from "expo-google-app-auth";

// source: https://aravindkumarvemula.medium.com/google-authentication-using-react-expo-6be317d84084

export default function App() {
  const [uname, setUname] = useState('No one logged in...');
  const [inDB, setInDB] = useState(false);
  const [msg, setMsg] = useState("");

  /* CODE BEGINS for HTTP Request test to 
  Express backend server: pf-server */
  
      const url='http://192.168.1.214:3001';  
      const formContentType = "application/x-www-form-urlencoded;charset=UTF-8";
      /* 
      * This function handles api request to the RESTful api we create
      * in express: See BarcodeServer app.js file
      */
      const handlePress = async (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
        console.log('handlePress '+method+' '+ url+'/'+op);
        var ret_val = await fetch(url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
              try { return JSON.parse(responseText);
              } catch (error) { return responseText; }
            }) .catch((error) => { console.error(error); });
        return ret_val;
      }

      const handleLogin = async (email) => {
        if (email.includes("@")) {
          //check if it's in database
          var user = await handlePress('users/get', 'PUT', { // adds into votes. 
              headers: {"Content-type": formContentType}, body: `email=${email}&`});
          console.log("user: line 51: "  + user  + " || user.emaiL: " + user.email);
          if (user.email) {
            setInDB(true);
            setMsg("You're in the pf-database!")
            return 200;
          } else {
            setInDB(false);
            setMsg("You're NOT in the pf-database!")
            return 404;
          }
        }
      }  
  /* CODE ENDS for Express backend server test */

  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `83414050974-8ekpa872o804mkbrbdpi0bo8nle9ckav.apps.googleusercontent.com`,
        androidStandaloneAppClientId: `83414050974-hla7fl5u5pn210ahhiv6i08avb512e1e.apps.googleusercontent.com`
      });
      console.log(user);
      if (type === "success") {
        console.log("User.email is : " + user.email);
        setUname(user.email);  
        await handleLogin(user.email);
        console.log("LoginScreen.js 17 | success, navigating to profile");
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };


  return (
    <View style={[styles.container, { backgroundColor: inDB ?  'lightgreen' : 'lightpink'}]}>
      <Text>Click below to login!</Text>
      <Button title='Sign in Using Google' 
        onPress={() => signInAsync()}/>
      <Text>Current User Email: {uname}.</Text>
      <Text style={{fontWeight: 'bold'}}>{msg}</Text>
      {inDB && <Button title='Log out' 
        onPress={()=>{ 
          setInDB(false); 
          setUname('No one logged in...');
          setMsg(""); }}/>}
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
