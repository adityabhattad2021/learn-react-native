import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button ,SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Write your goal here'
        />
        <Button
          title='Submit'
        />
      </View>
      <Text>I love react native!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 16,
  }
});
