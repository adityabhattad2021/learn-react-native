import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";
import PrimaryButton from "../components/primary-button";


export default function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter the number here."
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton>
                    Confim
                </PrimaryButton>
                <PrimaryButton>
                    Reset
                </PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        marginVertical:300,
        marginHorizontal:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#58085b',
        borderRadius:8,
        elevation:12,
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        gap:8
    }
})