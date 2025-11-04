import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const InsideStackScreen = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={Home} />
      <InsideStack.Screen name="Details" component={Details} />
    </InsideStack.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User:', user);
      setUser(user);
    });
    return unsubscribe;
  }, []);

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="Inside" component={InsideStackScreen} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
