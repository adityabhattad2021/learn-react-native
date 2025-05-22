import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import StartGameScreen from './screens/start-game-screen';

export default function App() {
  return (
    <LinearGradient colors={['#8520ae', '#f5dd0e']} style={styles.mainContainer}>
      <ImageBackground
        style={styles.mainContainer}
        source={require("./assets/background.png")}
        imageStyle={styles.imageContainer}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer:{
    opacity:0.25
  }
})
