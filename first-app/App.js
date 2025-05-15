import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

	const [goal, setGoal] = useState('');
	const [goals, setGoals] = useState([]);

	function handleInputChange(text) {
		setGoal(text);
	}

	function handleAddGoal() {
		if(goal.trim().length === 0){
			return;
		}
		setGoals(
			(prevGoals) => {
				return (
					[
						...prevGoals,
						{ text: goal, key: Math.random().toString() }
					]
				)
			}
		);
		setGoal('');
	}

	function handleDeleteGoal(key) {
		setGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
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
				<FlatList
					data={goals}
					renderItem={({item}) => {
						return (
							<View style={styles.goalText}>
								<Text >
									{item.text}
								</Text>
								<Button
									title='Delete'
									onPress={() => handleDeleteGoal(item.key)}
								/>
							</View>
						)
					}}
					keyExtractor={(item)=>item.key}
				/>
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		paddingTop: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingHorizontal:16,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		width: '100%',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		padding: 16,
	},
	goalsList: {
		width: '80%',
	},
	goalText: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: '#5e0be7',
		color: 'white',
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
