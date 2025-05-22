import { View, Text, Pressable, StyleSheet } from 'react-native';



export default function PrimaryButton({ children,onPress }) {

    function onPressHandler(){
        onPress()
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.innerContainer} android_ripple={{color:'#781d9d'}} onPress={onPressHandler}>
                <Text style={styles.textContainer}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:24,
        margin:4,
        overflow:'hidden',
        elevation:10,
    },
    innerContainer:{
        backgroundColor:'#5d157a',
        paddingVertical:12,
        paddingHorizontal:40,
        elevation:2,
    },  
    textContainer:{
        color:'#fff',
    }
})