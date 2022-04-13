import { TouchableOpacity } from 'react-native';
import { Button, Text, ListItem, Image, View } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

/!* This was designed using an iPhone SE*/

//!this renders the artist's name and a button to navigate to the next screen. it also sets up a "Route Parameter" which is the artist's ID Number so the next screen is further specified further.

export default function MyCartItem({ itemData, navigatorRef }) {
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
            <ListItem containerStyle={{ padding: 5, width: 310, borderBottomColor: '#97C45F', borderBottomWidth: 1, paddingBottom: 20 }}>

                <ListItem.Content style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 96, width: 96, marginBottom: 0 }}
                        source={{ uri: itemData.image }}
                    />
                    <ListItem.Content style={{ alignItems: 'flex-start' }}>

                        <Text style={{ fontFamily: 'SenB', fontSize: 12, marginBottom: 5 }} >{itemData.name}</Text>
                        <Text style={{ fontFamily: 'Sen', fontSize: 12, marginBottom: 20, textTransform: 'capitalize'}}>{itemData.category}</Text>
                        <ListItem.Content style={{ flexDirection: 'row', width: 70, borderRadius: 50,  justifyContent: 'flex-start', }}>
                            <Button
                                buttonStyle={{ backgroundColor: '#97C45F', borderTopLeftRadius: '50%',borderBottomLeftRadius: '50%' , height: 30, padding: 0, margin: 0 }}

                                icon={{
                                    type: 'antdesign',
                                    name: 'minus',
                                    color: 'white',
                                    size: 20
                                }}
                                onPress={() => { alert('I don\'t work') }}

                            />
                            <Text style={{ backgroundColor: '#97C45F', color: 'white', fontFamily: 'SenB', fontSize: 22, width: 10, paddingBottom: 3}}>1</Text>
                            <Button
                                buttonStyle={{ backgroundColor: '#97C45F', borderTopRightRadius: '50%',borderBottomRightRadius: '50%', height: 30, padding: 0, margin: 0 }}

                                icon={{
                                    name: 'add',
                                    color: 'white',
                                    size: 20
                                }}
                                onPress={() => { alert('I don\'t work') }}

                            />
                        </ListItem.Content>
                    </ListItem.Content>
                    <Text style={{ fontFamily: 'SenB', fontSize: 22, marginBottom: 5, position: 'absolute', right:0 , bottom: 0 }} >${itemData.retail}</Text>
                </ListItem.Content>

            </ListItem>
        </TouchableOpacity>
    );
}
