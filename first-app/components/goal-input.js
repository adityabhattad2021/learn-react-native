import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput
} from "react-native"
import { neoBrutalismColors } from "../theme"


export default function GoalInput({
    goal,
    handleAddGoal,
    handleInputChange,
}) {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})