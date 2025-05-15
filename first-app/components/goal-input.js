import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Modal
} from "react-native"
import { neoBrutalismColors } from "../theme"


export default function GoalInput({
    goal,
    handleAddGoal,
    isModalVisible,
    handleInputChange,
    setIsModalVisible
}) {

    function addGoalHandler() {
        handleAddGoal()
        setIsModalVisible(false)
    }
    return (
        <Modal
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='ENTER OBJECTIVE'
                        placeholderTextColor={neoBrutalismColors.text + '80'}
                        onChangeText={handleInputChange}
                        value={goal}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addGoalHandler} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        padding:10
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20,
        width:"100%",
        justifyContent: 'center',
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
        borderWidth: 3, // Thick border for input
        borderColor: neoBrutalismColors.border,
        padding: 15, // Increased padding
        color: neoBrutalismColors.text, // Black text
        fontSize: 18, // Larger font size
        fontWeight: 'bold', // Bold font
        backgroundColor: neoBrutalismColors.background, // Input background
        height: 70,
        width: "100%"
    },
    addButton: {
        backgroundColor: neoBrutalismColors.accent, // Accent color button
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: "100%",
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
    closeButton: {
        backgroundColor: "#b80202", // Accent color button
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: "100%",
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