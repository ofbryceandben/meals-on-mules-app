import { Button, } from 'react-native-elements';
import { Image, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifySelf: 'flex-start', alignItems: 'flex-end', zIndex: 100, justifyContent: 'space-between', width: '100%', position: 'relative', backgroundColor: '#fff', height: 50 }}>
            <Button
                onPress={() => navigation.navigate('Menu')}
                buttonStyle={{ backgroundColor: 'transparent' }}
                icon={{
                    name: 'menu',
                    color: '#F09C46',
                    size: 36
                }}
            />
            <Image
                source={require('../assets/main-logo.png')}
                style={{ alignSelf: 'center', marginTop: 0 }}
            />
            <Button
                onPress={() => navigation.navigate('Cart')}
                buttonStyle={{ backgroundColor: 'transparent' }}
                icon={{
                    name: 'shopping-cart',
                    color: '#F09C46',
                    size: 36
                }}
            />

        </View>
    )
}