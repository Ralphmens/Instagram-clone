import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';

export default function App() {
  return (
    <View style = {{backgroundColor: '#000', flex: 1}}>
      <Home/>
    </View>
  );
}


