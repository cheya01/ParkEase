import { View, Text, Image } from 'react-native'
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway"
import {Nunito_400Regular, Nunito_700Bold} from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '@/styles/onboarding/onboarding'

export default function OnboardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  })
  
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
   <LinearGradient
   colors={["#E5ECF9", "#F6F7F9"]}
   style={{flex:1, alignItems:"center", justifyContent:"center"}}
   >
      <View style={styles.firstContainer}>
        <View>
          <Image
            source={require('@/assets/images/ParkEase_logo.png')}
            style={styles.logo}
          />
          <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Your gateway to
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            hassel-free parking
          </Text>
        </View>
        </View>
      </View>
   </LinearGradient>  
  )
}