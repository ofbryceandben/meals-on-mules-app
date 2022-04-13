import { Button } from "react-native-elements";
import { Text, Image, StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function Onboard1({ navigation }) {
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
                source={require('../assets/onboarding/logo-1.png')}
                style={{ width: '50%', resizeMode: "contain" }}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: 'Staat', color: '#4B6E43', fontSize: 30, marginBottom: 15 }}>Step 1:</Text>
                <Text style={{ fontFamily: 'SenB', color: '#F09C46', fontSize: 20 }}>Browse Products</Text>
            </View>
            <Image
                source={require('../assets/onboarding/ob-1.png')}
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
                onPress={() => navigation.navigate('Onboard2')}
            />
            <Image
                source={require('../assets/onboarding/page-1.png')}
                style={{ width: '50%', resizeMode: "contain" }}
            />
            <Button
                title='Skip'
                titleStyle={{ color: '#97C45F', fontFamily: 'SenB', fontSize: 12 }}
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
        backgroundColor: "#F5F2B1"
    }
});