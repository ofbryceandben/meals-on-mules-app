import { Input, Icon } from "react-native-elements";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { useState } from 'react';

import Header from '../components/Header';




export default function Home({ navigation }) {
   
    const [keyWord, setKeyWord] = useState([]);

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
            <Header />
            <ImageBackground source={require('../assets/backgrounds/home-bg.png')} style={{ width: '100%', height: 150, alignItems: "center", justifyContent: 'flex-end', marginBottom: 20 }}>
                <Text style={{ fontFamily: 'Staat', color: '#F5F2B1', fontSize: 30, marginBottom: 15 }}>Grocery Shopping Made Easy</Text>
            </ImageBackground>

            <Input
                placeholder='Search'
                placeholderTextColor='#4B6E43'
                placeholderTextFontFamily='SenB'
                inputStyle={{ fontFamily: 'SenB', fontSize: 14, color: '#4B6E43', textTransform: 'capitalize' }}
                inputContainerStyle={{ backgroundColor: '#F4F4F4', borderBottomColor: 'transparent', paddingHorizontal: 20, marginHorizontal: 10 }}
                selectionColor="#F09C46"
                rightIcon={
                    <Icon
                        name='search'
                        size={27}
                        color='#F09C46'
                    />
                }
                onChangeText={(newWord) => setKeyWord(newWord) }
                onSubmitEditing = { () => navigation.navigate('SearchResults', {
                    searchId: keyWord
                })}
            />
            
            <ScrollView style={{ width: '100%' }}>
                <View style={styles. touchContainer}>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Produce',
                            nameId: 'Fruits & Vegetables',

                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/veg-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Fruits &amp; Vegetables</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Bakery',
                            nameId: 'Bakery',

                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/bakery-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Bakery</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Seafood',
                            nameId: 'Seafood',
                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/seafood-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Seafood</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Meat',
                            nameId: 'Meat',
                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/meat-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Meat</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Dairy',
                            nameId: 'Dairy & Eggs',
                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/dairy-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Dairy &amp; Eggs</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results', {
                            filterId: 'Snacks',
                            nameId: 'Snacks',
                        })}
                        style={styles.touchButton}>
                        <ImageBackground
                            source={require('../assets/backgrounds/snack-bg.png')}
                           style={styles. touchImage}
                        >
                            <Text style={styles. touchText}>Snacks</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    touchContainer:{
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        width: '100%', 
        paddingHorizontal: 30
    },
    touchButton:{
        width: 139, 
        marginBottom: 15 
    },
    touchImage:{
        width: 139, 
        height: 139, 
        justifyContent: 'center'
    },
    touchText:{
        fontFamily: 'Staat', 
        color: '#F5F2B1', 
        fontSize: 20, 
        marginBottom: 15, 
        textAlign: 'center' 
    }
});