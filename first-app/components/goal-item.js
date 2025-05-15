import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native"
import { neoBrutalismColors } from "../theme"


export default function GoalItem({ text,key,handleDeleteGoal }) {
    return (
        <TouchableOpacity
            style={styles.goalItem}
            onPress={handleDeleteGoal}
            activeOpacity={0.8}
        >
            <Text style={styles.goalText}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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
})