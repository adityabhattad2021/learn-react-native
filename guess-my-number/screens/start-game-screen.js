import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";
import PrimaryButton from "../components/primary-button";


export default function StartGameScreen() {

    function onPressConfirm(){
        console.log("Confirm Pressed");
    }

    function onPressReset(){
        console.log("Reset Pressed");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onPressConfirm}>
                    Confim
                </PrimaryButton>
                <PrimaryButton onPress={onPressReset}>
                    Reset
                </PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        marginVertical:370,
        marginHorizontal:50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'#8520ae',
        borderRadius:8,
        elevation:12,
    },
    input:{
        borderColor:"#f5dd0e",
        borderWidth:3,
        borderRadius:8,
        width:120,
        color:"#f5dd0e",
        fontSize:24,
        textAlign:'center',
        paddingVertical:2,
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        gap:8
    }
})