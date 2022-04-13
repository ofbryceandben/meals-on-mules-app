import { Button } from "react-native-elements";
import { Text, Image, StyleSheet, View, ActivityIndicator } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState, useEffect, } from "react";

export default function Detail({ route, navigation }) {
  // !Pull the route parameters from the previous screen labelled detailId
  const { productId } = route.params;

  //! UseState Functions to change the value of the constants
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  useEffect(() =>

    //! execute a fetch using useEffect and detailId route parameter
    fetch('https://momapi.megankrenbrink.com/api/products/read.php?sku=' + productId)
      .then(res => res.json())
      .then(
        (result) => {
          //! If there is a successful result
          setIsLoaded(true);
          setDataResult(result.products[0]);
          console.log(result.products);
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

  return (
    <View style={styles.container}>
      {displayData(error, isLoaded, dataResult)}
    </View>
  );
  function displayData(error, isLoaded, dataResult) {

    //! If there is an error, throw an error message.
    if (error) {
      return (
        <View>
          <Text style={[styles.text16B, { color: '#F09C46', textAlign: 'center' }]}>Error: {error.message}</Text>
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
        <View style={{ height: '100%' }}>
          <Text style={[styles.text16B, { color: '#F09C46', textAlign: 'center' }]}>No products found.</Text>
        </View>
      );
    }

    //! If the search resultCount is > 1 , show the FlatList.
    else {
      return (

        <View style={{ backgroundColor: "#fff", justifyContent: "space-between" , height: '100%'}}>
          <Image
            source={{ uri: dataResult.image }}
            style={{ height: 250, width: 250, alignSelf: 'center' }}

          />

          <View style={styles.greenContainer} >
            <View style={[styles.borderBottom, { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }]}>

              <Text style={{ fontFamily: 'SenB', fontSize: 24, paddingVertical: 25, paddingLeft: 20 }}>{dataResult.name}</Text>
            </View>
            <View style={[styles.borderBottom, styles.detailContainer]}>
              <View style={[styles.detailBox, { marginBottom: 10 }]}>
                <Text style={[styles.text16R, styles.drkGreenTxt]}>SKU</Text>
                <Text style={styles.text16B}>{dataResult.sku}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={[styles.text16R, styles.drkGreenTxt]}>Category</Text>
                <Text style={[styles.text16B, styles.caps]}>{dataResult.category}</Text>
              </View>

            </View>
            <View style={styles.descContainer}>
              <Text style={[styles.text16R, styles.drkGreenTxt, { marginBottom: 15, }]}>Description</Text>
              <Text style={[styles.text16R, styles.caps]}>{dataResult.description}</Text>
            </View>
            <Button
              title={`$${dataResult.retail} each`}
              titleStyle={styles.text16B}
              style={{ alignSelf: "center" }}
              buttonStyle={styles.buttonStyle}
              icon={{
                name: 'add',
                color: 'white'
              }}
              iconContainerStyle={{ position: 'absolute', right: 10 }}
              onPress={() => { alert('I don\'t work') }}

            />
          </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  greenContainer: {
    backgroundColor: '#f0f6e7',
    borderRadius: 30,
    paddingVertical: 10,
    height: 400
  },
  text16B: {
    fontFamily: 'SenB',
    fontSize: 16
  },
  text16R: {
    fontFamily: 'Sen',
    fontSize: 16
  },
  drkGreenTxt: {
    color: '#4B6E43'
  },
  detailContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 25
  },
  detailBox: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%'
  },
  descContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
    justifyContent: "space-between",
    marginBottom: 20
  },
  buttonStyle: {
    backgroundColor: '#97C45F',
    width: 300,
    borderRadius: 50,

  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#97C45F'
  },
  caps: {
    textTransform: 'capitalize'
  }
});