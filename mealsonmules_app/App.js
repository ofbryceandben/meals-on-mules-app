import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Onboard1 from './screens/OnboardScreenOne';
import Onboard2 from './screens/OnboardScreenTwo';
import Onboard3 from './screens/OnboardScreenThree';
import Home from './screens/HomeScreen';
import Results from './screens/ResultsScreen';
import Menu from './screens/MenuScreen';
import Cart from './screens/CartScreen';
import Detail from './screens/DetailScreen';
import SearchResults from './screens/SearchResultScreen';

const Stack = createNativeStackNavigator();




export default function App() {
 return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: 'transparent'}, headerTitleStyle:{color: 'transparent'}, headerTintColor: '#F09C46' }}            
            >
                <Stack.Screen name='Onboard1' component={Onboard1} 
                options={{ title: 'Back' }}
                />
                <Stack.Screen name='Onboard2' component={Onboard2} 
                options={{ title: 'Back' }}
                />
                <Stack.Screen name='Onboard3' component={Onboard3} 
                options={{ title: 'Back' }}
                />
                <Stack.Screen name='Home' component={Home} 
                options={{ title: 'Back',   headerBackVisible: false }}
                />

                <Stack.Screen name='Results' component={Results} 
                options={{ title: 'Back' }}
                />
                <Stack.Screen name='SearchResults' component={SearchResults} 
                options={{ title: 'Back' }}
                />
                <Stack.Screen name='Menu' component={Menu} 
                options={{ title: 'My Account',  }}
                />
                <Stack.Screen name='Cart' component={Cart} 
                options={{ title: 'Cart' }}
                />
                <Stack.Screen name='Detail' component={Detail} 
                options={{ title: 'Back' }}
                />
            </Stack.Navigator>
        </NavigationContainer>


    );
}
