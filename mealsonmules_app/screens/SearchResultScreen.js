import { useEffect, useState } from 'react';
import {View, FlatList, Text, ActivityIndicator } from "react-native";
import Header from '../components/Header';
import MySearchItem from '../components/ItemList';

export default function SearchResults({ route, navigation }) {
    // !Pull the route parameters from the previous screen labelled detailId
    const { searchId } = route.params;

    //! UseState Functions to change the value of the constants
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);
  
    useEffect(() =>

        //! execute a fetch using useEffect and detailId route parameter
        fetch('https://momapi.megankrenbrink.com/api/products/read.php?keyword=' + searchId)
            .then(res => res.json())
            .then(
                (result) => {
                    //! If there is a successful result
                    setIsLoaded(true);
                    setDataResult(result);
                    console.log(result);
                },
                (error) => {
                    //! If there is an error
                    setIsLoaded(true);
                    setError(error);
                }), [])
  

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <Header />

            <View style={{ width: '100%', height: 100, alignItems: "center", justifyContent: 'flex-end', backgroundColor: '#82C2AB', }}>

                <Text style={{ fontFamily: 'Staat', color: '#F5F2B1', fontSize: 30, marginBottom: 20 }}>Product Search</Text>
            </View>

            {displayData(error, isLoaded, dataResult)}


        </View>
    );

    function displayData(error, isLoaded, dataResult) {
        //! Render the item within the scope of the FlatList
        const renderItem = ({ item }) => (

            <MySearchItem itemData={item} navigatorRef={navigation} />
        );
        
        //! If there is an error, throw an error message.
        if (error) {
            return (
                <View>
                    <Text style={{ color: '#F09C46', fontFamily: 'SenB', fontSize: 16, textAlign: 'center' }}>Error: {error.message}</Text>
                </View>
            );
        }

        //! If the search is not loaded, add a Loading Screen w/ Activity Indicator
        else if (!isLoaded) {
            return (
                <View>
                    <Text style={{ color: '#F09C46', fontFamily: 'SenB', fontSize: 20, textAlign: 'center' }}>Loading...</Text>
                    <ActivityIndicator size="large" color="#F09C46" />
                </View>
            );
        }

        //! If the search result is undefined, show the following text
        else if (dataResult.message === "No products found.") {
            return (
                <View style={{height: '100%'}}>
                    <Text style={{ color: '#F09C46', fontFamily: 'SenB', fontSize: 16, textAlign: 'center' }}>No products found.</Text>
                </View>
            );
        }
        
        //! If the search resultCount is > 1 , show the FlatList.
        else {
          return (
          
            <FlatList
            style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', height: '72%'}}
            horizontal={false}
            numColumns={2}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            data={dataResult.products}
            renderItem={renderItem}
            keyExtractor={item => item.sku}
        />
          );
        }
    }
    
}