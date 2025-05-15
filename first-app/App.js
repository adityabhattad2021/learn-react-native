import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList,TouchableOpacity } from 'react-native';
import { useState } from 'react';

const neoBrutalismColors = {
    background: '#ffffff', // White background
    text: '#000000', // Black text
    border: '#000000', // Black borders
    accent: '#008000', // A stark, vibrant accent color (magenta)
};

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
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input} 
                    placeholder='ENTER OBJECTIVE' 
                    placeholderTextColor={neoBrutalismColors.text + '80'} 
                    onChangeText={handleInputChange}
                    value={goal}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddGoal} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>ADD</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.goalsList}>
                {goals.length === 0 && <Text style={styles.noGoalsText}>NO OBJECTIVES ADDED YET.</Text>}
                <FlatList
                    data={goals}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.goalItem} 
                                onPress={() => handleDeleteGoal(item.key)}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.goalText}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={styles.goalsListContent} // Style the content container
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 3, // Thick border
        borderColor: neoBrutalismColors.border,
        padding: 15, // Increased padding
        backgroundColor: neoBrutalismColors.background, // Match background
        // Add the signature offset shadow effect
        shadowColor: neoBrutalismColors.border,
        shadowOffset: { width: 6, height: 6 }, // Hard offset shadow
        shadowOpacity: 1, // Fully opaque shadow
        shadowRadius: 0, // Sharp edges for shadow
        elevation: 8, // Elevation for Android shadow
    },
    input: {
        flex: 1,
        marginRight: 15, // Increased margin
        borderWidth: 3, // Thick border for input
        borderColor: neoBrutalismColors.border,
        padding: 15, // Increased padding
        color: neoBrutalismColors.text, // Black text
        fontSize: 18, // Larger font size
        fontWeight: 'bold', // Bold font
        backgroundColor: neoBrutalismColors.background, // Input background
    },
    addButton: {
        backgroundColor: neoBrutalismColors.accent, // Accent color button
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 0, // Sharp corners
        borderWidth: 3,
        borderColor: neoBrutalismColors.border,
        // Add the signature offset shadow effect
        shadowColor: neoBrutalismColors.border,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
    },
    buttonText: {
        color: neoBrutalismColors.border, // Black text on accent button
        fontSize: 18,
        fontWeight: 'bold', // Bold text
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
    goalItem: {
        backgroundColor: neoBrutalismColors.background, // White background for items
        padding: 15, // Increased padding
        marginVertical: 10, // Increased vertical margin
        borderRadius: 0, // Sharp corners
        borderWidth: 3, // Thick border
        borderColor: neoBrutalismColors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Add the signature offset shadow effect
        shadowColor: neoBrutalismColors.border,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
    },
    goalText: {
        color: neoBrutalismColors.text, // Black text
        fontSize: 18, // Larger font
        // fontWeight: 'bold', // Can be bold or regular depending on preference
        flexShrink: 1, // Allow text to wrap
        marginRight: 10,
    },
});``