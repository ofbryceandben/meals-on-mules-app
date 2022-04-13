import { Button } from "react-native-elements";
import { Text, Image, StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function Onboard2({navigation}){
    let [fontsLoaded] = useFonts({
        'Sen': require('../assets/fonts/Sen-Regular.ttf'),
        'SenB': require('../assets/fonts/Sen-Bold.ttf'),
        'SenEB': require('../assets/fonts/Sen-ExtraBold.ttf'),
        'Staat': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <View style={styles.container}>
        <Image
            source={require('../assets/onboarding/logo-2.png')}
            style={{ width: '50%', resizeMode: "contain" }}
        />
        <View style={{ alignItems: "center" }}>
            <Text style={{ fontFamily: 'Staat', color: '#36676A', fontSize: 30, marginBottom: 15 }}>Step 2:</Text>
            <Text style={{ fontFamily: 'SenB', color: '#F5F2B1', fontSize: 20 }}>Add to cart</Text>
        </View>
        <Image
            source={require('../assets/onboarding/ob-2.png')}
            style={{ width: '60%', resizeMode: "contain", marginBottom: 30 }}
        />
        <Button
            title='Continue'
            color='#fff'
            titleStyle={{ color: '#fff', fontFamily: 'SenB', fontSize: 16, marginLeft: 20}}
            buttonStyle={{ backgroundColor: '#f09C46', borderRadius: 50, width: 232}}
            containerStyle={{marginBottom: 15}}
            icon={{
                name: 'arrow-forward',
                color: 'white'
                
            }}
            iconPosition='right'
            containerStyle={{marginBottom: 15}}
            onPress={() => navigation.navigate('Onboard3')}
        />
        <Image
            source={require('../assets/onboarding/page-2.png')}
            style={{ width: '50%', resizeMode: "contain" }}
        />
        <Button
            title='Skip'
            titleStyle={{ color: '#36676A', fontFamily: 'SenB', fontSize: 12 }}
            buttonStyle={{ backgroundColor: 'transparent', }}
            onPress={() => navigation.navigate('Home')}
        />

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 24,
        backgroundColor: "#82C2A8"
    }
});