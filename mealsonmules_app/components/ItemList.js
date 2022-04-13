import {TouchableOpacity} from 'react-native';
import { Button, Text, ListItem, Image, View } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

/!* This was designed using an iPhone SE*/

//!this renders the artist's name and a button to navigate to the next screen. it also sets up a "Route Parameter" which is the artist's ID Number so the next screen is further specified further.

export default function MySearchItem({ itemData, navigatorRef }) {
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
        <TouchableOpacity
        onPress={() => navigatorRef.navigate('Detail', {
            productId: itemData.sku
        })}
        >
        <ListItem containerStyle={{ width: 150, margin: 20, height: 215, padding: 0 }}>

            <ListItem.Content>
                <Image
                    style={{ height: 150, width: 150, marginBottom:0 }}
                    source={{ uri: itemData.image }}
                />
                <ListItem.Content style={{ paddingLeft: 10, position: 'relative', backgroundColor:'transparent' }}>

                    <Text style={{ fontFamily: 'SenB', fontSize: 12, marginBottom: 5 }} >{itemData.name}</Text>
                    <Text style={{ fontFamily: 'Sen', fontSize: 12 }}>${itemData.retail}/each</Text>
                </ListItem.Content>
                <Button
                    containerStyle={{ position: 'absolute', bottom: 0, right: 0 }}
                    buttonStyle={{ backgroundColor: '#97C45F', borderRadius: '50%', height: 30, padding: 0 }}

                    icon={{
                        name: 'add',
                        color: 'white',
                        size: 20
                    }}
                    onPress={()=>{alert('I don\'t work')}}

                />
            </ListItem.Content>

        </ListItem>
        </TouchableOpacity>
    );
}
