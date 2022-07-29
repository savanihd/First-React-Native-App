import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState,useEffect} from 'react';

export default function App() {

  /*------------------------------------------
  --------------------------------------------
  Users Lists
  --------------------------------------------
  --------------------------------------------*/
  const users = [
    {id: 1, name: 'Hardik', country: 'India'},
    {id: 2, name: 'Vimal', country: 'India'},
    {id: 3, name: 'Harshad', country: 'Canada'},
    {id: 4, name: 'Keval', country: 'Denmark'},
    {id: 5, name: 'Savan', country: 'USA'},
  ];

  return (
    <View style={styles.container}>
      {users
        .filter(user => {
          return (
            user.country === 'India' || user.country === 'USA'
          );
        })
        .map((user, index) => {
          return (
            <div key={index}>
              <h2>Name: {user.name}</h2>
              <h2>Country: {user.country}</h2>
              <hr />
            </div>
          );
        })}
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
