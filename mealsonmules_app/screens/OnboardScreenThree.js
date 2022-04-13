import { Button } from "react-native-elements";
import { Text, Image, StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function Onboard3({navigation}) {
    let [fontsLoaded] = useFonts({
        'Sen': require('../assets/fonts/Sen-Regular.ttf'),
        'SenB': require('../assets/fonts/Sen-Bold.ttf'),
        'SenEB': require('../assets/fonts/Sen-ExtraBold.ttf'),
        'Staat': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/onboarding/logo-3.png')}
                style={{ width: '50%', resizeMode: "contain" }}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: 'Staat', color: '#82C2A8', fontSize: 30, marginBottom: 15 }}>Step 3:</Text>
                <Text style={{ fontFamily: 'SenB', color: '#97C45F', fontSize: 20 }}>We Deliver</Text>
            </View>
            <Image
                source={require('../assets/onboarding/ob-3.png')}
                style={{ width: '60%', resizeMode: "contain", marginBottom: 30, marginLeft: '10%'}}
            />
            <Button
                title='Continue'
                color='#fff'
                titleStyle={{ color: '#fff', fontFamily: 'SenB', fontSize: 16, marginLeft: 20 }}
                buttonStyle={{ backgroundColor: '#f09C46', borderRadius: 50, width: 232 }}
                containerStyle={{ marginBottom: 15 }}
                icon={{
                    name: 'arrow-forward',
                    color: 'white'

                }}
                iconPosition='right'
                onPress={() => navigation.navigate('Home')}
            />
            <Image
                source={require('../assets/onboarding/page-3.png')}
                style={{ width: '50%', resizeMode: "contain" }}
            />
            <Button
                title='Skip'
                titleStyle={{ color: 'transparent', fontFamily: 'SenB', fontSize: 12 }}
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
        backgroundColor: "#4B6E43"
    }
});