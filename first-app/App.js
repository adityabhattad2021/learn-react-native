import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function handleInputChange(text) {
    setGoal(text);
  }

  function handleAddGoal() {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setGoal('');
  }

  function handleDeleteGoal(index) {
    setGoals((prevGoals) => prevGoals.filter((_, i) => i !== index));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Write your goal here'
          onChangeText={handleInputChange}
          value={goal}
        />
        <Button
          title='Submit'
          onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goalsList}>
        {goals.length === 0 && <Text>No goals added yet!</Text>}
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalText}>
            <Text >
              {goal}
            </Text>
            <Button
              title='Delete'
              onPress={() => handleDeleteGoal(index)}
            />
          </View>
        ))}
      </View>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 16,
  },
  goalsList: {
    width: '80%',
  },
  goalText: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#5e0f7',
    color: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
