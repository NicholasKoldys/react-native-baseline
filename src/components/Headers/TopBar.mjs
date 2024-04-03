import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage } from '../../pages/en/home/HomePage.mjs';
import { AboutPage } from '../../pages/en/about/AboutPage.mjs';

import { Logo } from '../Icons/Logo.mjs';
import { FloatingNavBar } from './FloatingNavBar.mjs';

const NavBar = ({ navigation, route, title: _title }) => 
// {
//     return (
//         <FloatingNavBar />
//     );
// };
({
    headerBackTitle: _title,
    headerTitle: () => <Logo />,
    headerRight: () => <FloatingNavBar 
        onHomePress={ () => navigation.navigate('Home') }
        onOtherPress={ () => navigation.navigate('About') }
    />,
    headerTitleAlign: 'center',
    headerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#2bff00',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
});

export function InitTopBar() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={ NavBar } >
        <Stack.Screen
          name="Home"
          component={ HomePage }
          options={{ title: 'Home' }}
          // options={ ({ navigation, route }) => <FloatingNavBar { ...[navigation, route] } />
          // options={({ navigation, route }) => NavBar({navigation, route, title: 'Home'})}
        />
        <Stack.Screen 
          name="About" 
          component={ AboutPage }
          options={{ title: 'About' }}
          // options={({ navigation, route }) => NavBar({navigation, route, title: 'About'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}