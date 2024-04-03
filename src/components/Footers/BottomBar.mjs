import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomePage } from '../../pages/en/home/HomePage.mjs';
import { AboutPage } from '../../pages/en/about/AboutPage.mjs';


// const TabBar = ({ state, descriptors, navigation }) => ({
    
// });

export function InitBottomBar() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                // screenOptions={ TabBar }
            >
                <Tab.Screen 
                    name="Home"
                    component={ HomePage }
                    options={{ 
                        title: 'Home',
                        // tabBarIcon: ,
                    }}
                />
                <Tab.Screen 
                    name="About"
                    component={ AboutPage }
                    options={{ 
                        title: 'About',
                        // tabBarIcon: ,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}