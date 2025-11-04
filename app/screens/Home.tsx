import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Welcome to Home Page</Text>

      <Button title="Open Detail Page" onPress={() => navigation.navigate('Details')} />
      <View style={{ height: 10 }} />
      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};

<Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />

export default Home;
