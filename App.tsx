import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.body}>
        <Text style={styles.title}>entressafra</Text>
        <Image
          style={styles.logo}
          source={require('./assets/Logo.png')}
        />
      </View>

      <View style={styles.bodyLogin}>
        <Text style={styles.titleLogin}>Login</Text>
        <Text style={styles.textWellcome}>Bem-vindo de volta!</Text>

        <View style={styles.form}>

          <Text style={styles.textInput}>Email</Text>
            <View style={styles.inputs}>
              <Ionicons 
                style={styles.icon} 
                  name="mail-outline" 
                  size={20} 
                  color="#A7173A"/>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                textContentType={'emailAddress'} 
                spellCheck={false}
              ></TextInput>
            </View>

            <Text style={styles.textInput}>Senha</Text>
            <View style={styles.inputs}>
              <Ionicons 
                style={styles.icon} 
                  name="lock-closed-outline" 
                  size={20} 
                  color="#A7173A"/>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                textContentType={'password'} 
              ></TextInput>
            </View>
            </View>

          <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
          <Pressable style={styles.btn}>
            <Text style={{
              textAlign: 'center',
              color: 'white'
            }}>Entrar</Text>
          </Pressable>

      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#A7173A"
  },
  title:{
    textAlign:'center',
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 24,
    color: 'white'
  },
  body: {
    backgroundColor: "#A7173A"
  },
  logo: {
    marginTop: 40,
    width: 535,
    height:423,
  },
  bodyLogin: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderRadius: 20
  },
  titleLogin:{
    textAlign:'center',
    fontSize: 24,
    fontWeight: '900',
    color: '#A7173A',
    paddingTop: 20,
    paddingBottom: 5,
  },
  textWellcome:{
    textAlign: 'center',
  },
  textInput:{
    color: '#479B51',
    marginBottom: 10
  },
  form:{
    padding: 20
  },
  input:{
    backgroundColor: '#F5F5F5',
    height: 30,
    width: '92%',
  },
  icon:{
    width:21,
    height: 20,
    marginRight: 10,
    marginTop: 3.5,
  },
  inputs:{
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  esqueceu:{
    textDecorationLine:'underline', 
    color:'#A7173A',
    textDecorationColor:'green',
    textAlign:'center',
  },
  btn:{
    backgroundColor: '#A7173A',
    padding: 10,
    borderRadius:20,
    margin: 20
  }
});
