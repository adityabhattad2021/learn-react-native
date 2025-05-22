import {
    TextInput
} from "react-native";
import PrimaryButton from "../components/primary-button";


export default function StartGameScreen(){
    return (
        <View>
            <TextInput
                placeholder="Enter the number here."
            />
            <PrimaryButton>
                Confim 
            </PrimaryButton>
            <PrimaryButton>
                Reset
            </PrimaryButton>
        </View>
    );
}