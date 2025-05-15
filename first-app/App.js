import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/goal-item';
import { neoBrutalismColors } from './theme';
import GoalInput from './components/goal-input';


export default function App() {

	const [goal, setGoal] = useState('');
	const [goals, setGoals] = useState([]);

	function handleInputChange(text) {
		setGoal(text);
	}

	function handleAddGoal() {
		if (goal.trim().length === 0) {
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
            <StatusBar style="dark" />
			<GoalInput
				handleInputChange={handleInputChange}
				handleAddGoal={handleAddGoal}
				goal={goal}
			/>
            <View style={styles.goalsList}>
                {goals.length === 0 && <Text style={styles.noGoalsText}>NO OBJECTIVES ADDED YET.</Text>}
                <FlatList
                    data={goals}
                    renderItem={({ item }) => {
                        return (
							<GoalItem
								text={item.text}
								handleDeleteGoal={()=>handleDeleteGoal(item.key)}
							/>
						)
                    }}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={styles.goalsListContent} 
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: neoBrutalismColors.background, // White background
        paddingTop: 60, // More padding at the top
        paddingHorizontal: 20, // Increased horizontal padding
    },
    goalsList: {
        flex: 1,
        // No specific width needed if container has padding
        marginTop: 10, // Add some space above the list
    },
     goalsListContent: {
        paddingBottom: 20, // Add padding at the bottom of the list
    },
    noGoalsText: {
        textAlign: 'center',
        marginTop: 40, // More space
        fontSize: 20, // Larger font
        color: neoBrutalismColors.text + 'cc', // Slightly transparent black
        fontWeight: 'bold', // Bold font
    },
});