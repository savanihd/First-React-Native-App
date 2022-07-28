import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function App() {

  const [ip, setIP] = useState('');

  /*------------------------------------------
  --------------------------------------------
  Getting IP using API
  --------------------------------------------
  --------------------------------------------*/
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }
  
  /*------------------------------------------
  --------------------------------------------
  Call getData() function
  --------------------------------------------
  --------------------------------------------*/
  useEffect( () => {
    getData()

  }, [])

  return (
    <View style={styles.container}>
      <Text>Your IP Address is {ip}</Text>
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
