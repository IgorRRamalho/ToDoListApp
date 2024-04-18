import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/';
import Main from './src/components/Main/';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="default"/> */}
      <Header/>
      <Main/>
      <Footer/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70, // Espaçamento do topo
    backgroundColor: '#121212'
  },
});
