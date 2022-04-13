import { useEffect, useState } from 'react';

import { Button, } from "react-native-elements";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MyCartItem from '../components/CartList';


export default function Cart({ navigation }) {
    //! UseState Functions to change the value of the constants
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() =>

        //! execute a fetch using useEffect and detailId route parameter
        fetch('https://momapi.megankrenbrink.com/api/products/read.php?keyword=pepper')
            .then(res => res.json())
            .then(
                (result) => {
                    //! If there is a successful result
                    setIsLoaded(true);
                    setDataResult(result.products);
                    console.log(result);
                },
                (error) => {
                    //! If there is an error
                    setIsLoaded(true);
                    setError(error);
                }), [])

    let [fontsLoaded] = useFonts({
        'Sen': require('../assets/fonts/Sen-Regular.ttf'),
        'SenB': require('../assets/fonts/Sen-Bold.ttf'),
        'SenEB': require('../assets/fonts/Sen-ExtraBold.ttf'),
        'Staat': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const renderItem = ({ item }) => (

        <MyCartItem itemData={item} navigatorRef={navigation} />
    );
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'SenB', fontSize: 24, textAlign: "center", marginTop: -38, marginBottom: 30 }}>My Cart</Text>
            <View style={{ flexDirection: "row", borderBottomColor: '#97C45F', borderBottomWidth: 1, paddingBottom: 20 }}>
                <View>
                    <Text style={{ fontFamily: 'Sen', fontSize: 16, color: '#666666' }}>123 Seymour Street</Text>
                    <Text style={{ fontFamily: 'Sen', fontSize: 14, color: '#666666' }}>Suite 404</Text>
                </View>
                <Button
                    style={{ marginLeft: 20 }}
                    buttonStyle={{ backgroundColor: 'transparent', width: 50, }}
                    icon={{
                        type: 'font-awesome',
                        name: 'chevron-down',
                        color: '#666666'
                    }}
                    iconPosition='left'
                    onPress={() => { alert('I don\'t work') }}
                />
            </View>
            <FlatList
                style={{ flexWrap: 'wrap', flexDirection: 'row', }}
                data={dataResult}
                renderItem={renderItem}
                keyExtractor={item => item.sku}
            />
            <View style={{ height: '30%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: 'Sen', fontSize: 18 }}>Delivery</Text>
                    <Text style={{ fontFamily: 'SenB', fontSize: 18, color: '#f09C46' }}>$1.50</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: 'Sen', fontSize: 18 }}>Taxes</Text>
                    <Text style={{ fontFamily: 'SenB', fontSize: 18, color: '#f09C46' }}>$3.53</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: 'Sen', fontSize: 18 }}>Tip</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button
                            title='10%'
                            titleStyle={{ color: 'white', fontSize: 11, fontFamily: 'SenB' }}
                            buttonStyle={{ backgroundColor: '#f09C46', width: 35, height: 35 }}
                            onPress={() => { alert('I don\'t work') }}
                        />
                        <Button
                            title='18%'
                            titleStyle={{ color: 'white', fontSize: 11, fontFamily: 'SenB' }}
                            buttonStyle={{ backgroundColor: '#f09C46', opacity:0.25, width: 35, height: 35, borderRadius:0 }}
                            onPress={() => { alert('I don\'t work') }}
                        />
                        <Button
                            title='20%'
                            titleStyle={{ color: 'white', fontSize: 11, fontFamily: 'SenB' }}
                            buttonStyle={{ backgroundColor: '#f09C46', opacity:0.25, width: 35, height: 35, borderRadius:0 }}
                            onPress={() => { alert('I don\'t work') }}
                        />
                        <Button
                            title='other'
                            titleStyle={{ color: 'white', fontSize: 7, fontFamily: 'SenB' }}
                            buttonStyle={{ backgroundColor: '#f09C46', opacity:0.25, width: 35, height: 35, borderRadius:0 }}
                            onPress={() => { alert('I don\'t work') }}
                        />
                    </View>

                </View>
                <Button
                    title='Place Order                                $12.80'
                    titleStyle={{ fontSize: 14, fontFamily: 'SenB' }}
                    buttonStyle={{ backgroundColor: '#97C45F', width: 300, alignSelf: 'center', borderRadius: 50, }}
                    onPress={() => { alert('I don\'t work') }}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 24,
        backgroundColor: "#fff"
    }
});