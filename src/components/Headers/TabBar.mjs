import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { HomePage } from '../../pages/en/home/HomePage.mjs';
import { AboutPage } from '../../pages/en/about/AboutPage.mjs';


// const TabBar = ({ state, descriptors, navigation }) => ({
    
// });

export function InitTabBar() {
    const Tab = createMaterialTopTabNavigator();

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