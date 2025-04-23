import React from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/accute.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.header}>Accute Banking Services</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.gray}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.gray}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 40,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: Colors.black,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  signupButton: {
    backgroundColor: Colors.blue,
  },

  signupButtonText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
