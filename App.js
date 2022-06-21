import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AsyncStorage, Platform} from 'react-native';
import {createUserWithEmailAndPassword, auth} from './firebase/firebase';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={'Email'}
        onChangeText={text => setUsername(text)}
        autoCapitalize={'none'}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={'Password'}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button
        title={'Sign Up'}
        onPress={() => {
          createUserWithEmailAndPassword(auth, username, password)
            .then(userCredential => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch(error => {
              console.log(error);
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
