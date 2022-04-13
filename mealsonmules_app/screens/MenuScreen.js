import { Button } from "react-native-elements";
import { Text, Image, StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { forwardRef } from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function Menu({ navigation }) {
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
      <Text style={{ fontFamily: 'SenB', fontSize: 24, textAlign: "center", marginTop: -38 }}>My Account</Text>
      <View style={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 24,
        marginBottom: 30
      }}>
        <Button
          title='Order History'
          titleStyle={styles.titleStyle}
          buttonStyle={styles.topButtons}
          containerStyle={{ marginBottom: 15 }}
          icon={{
            type: 'fontisto',
            name: 'history',
            color: '#f09C46',
            size: 24
          }}
          iconPosition='left'
          onPress={() => { alert('I don\'t work') }}
        />
        <Button
          title='Saved Address'
          titleStyle={styles.titleStyle}
          buttonStyle={styles.topButtons}
          containerStyle={{ marginBottom: 15 }}
          icon={{
            type: 'fontawesome',
            name: 'home',
            color: '#f09C46',
            size: 26
          }}
          iconPosition='left'
          onPress={() => { alert('I don\'t work') }}

        />
        <Button
          title='Settings'
         titleStyle={styles.titleStyle}
          buttonStyle={styles.topButtons}
          containerStyle={{ marginBottom: 15 }}
          icon={{
            name: 'settings',
            color: '#f09C46',
            size: 26
          }}
          iconPosition='left'
          onPress={() => { alert('I don\'t work') }}

        />
        <Button
          title='Support'
         titleStyle={styles.titleStyle}
          buttonStyle={styles.topButtons}
          containerStyle={{ marginBottom: 15 }}
          icon={{
            name: 'support',
            color: '#f09C46',
            size: 26
          }}
          iconPosition='left'
          onPress={() => { alert('I don\'t work') }}

        />
      </View>
      <View style={styles.greenContainer} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/bryce-maloney.jpg')}
          />
          <View style={{ width: '70%', marginLeft: 40 }}>
            <View style={styles.textContainer}>
              <View >
                <Text style={styles.headerText}>User Name</Text>
                <Text style={styles.bodyText}>Brucey69</Text>
              </View>
              <Icon
                name='edit'
                size={20}
                style={{ width: 20, padding: 0 }}
              />
            </View>
            <View style={styles.textContainer}>
              <View >
                <Text style={styles.headerText}>Password</Text>
                <Text style={styles.bodyText}>bryceMaloney</Text>
              </View>
              <Icon
                name='edit'
                size={20}
                style={{ width: 20, padding: 0 }}
              />
            </View>
            <View style={styles.textContainer}>
              <View >
                <Text style={styles.headerText}>Phone Number</Text>
                <Text style={styles.bodyText}>123-456-7890</Text>
              </View>
              <Icon
                name='edit'
                size={20}
                style={{ width: 20, padding: 0 }}
              />
            </View>
          </View>
        </View>
        <Button
          title='Log Out'
          titleStyle={{ fontSize: 14, fontFamily: 'SenB' }}
          buttonStyle={{ backgroundColor: '#97C45F', width: 152, borderRadius: 50, }}
          onPress={() => { alert('I don\'t work') }}

        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleStyle: {
    color: '#000',
    fontFamily: 'Sen',
    fontSize: 16,
    marginLeft: 20,
    textAlign: "left"
  },
  topButtons:{
    backgroundColor: 'white', 
    borderRadius: 50, 
    width: 232, 
    justifyContent: 'flex-start' 
  },
  greenContainer:{
    backgroundColor: '#f0f6e7', 
    flex: 1, 
    borderRadius: 30, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  imageStyle:{
    borderRadius: 100, 
    resizeMode: 'contain', 
    width: 110, 
    height: 110, 
    marginHorizontal: 100
  },
  textContainer:{
    flexDirection: 'row', 
    justifyContent: "space-between", 
    width: '50%', 
    alignItems: 'flex-end', 
    marginBottom: 20
  },
  headerText:{
    fontSize: 14, 
    fontFamily: 'Sen'
  },
  bodyText:{ 
    fontSize: 12, 
    fontFamily: 'SenB'
  },

});