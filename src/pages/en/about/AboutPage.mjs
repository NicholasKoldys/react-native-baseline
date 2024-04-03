import React from 'react';

import {
    Text,
    useColorScheme,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { headingStyles } from '../../../styles/headingCss.mjs';

import { Header } from '../../../components/Headers/Header.mjs';
import LargeHeader from '../../../components/Headers/LargeHeader.mjs';
import { FadingView } from '../../../components/Containers/FadingView.mjs';

/**
 * 
 * @param {NativeStackScreenProps} 
 * @returns {React.JSX.Element}
 */
export const AboutPage = ({ _route, navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Header
                    centerComp={<Text style={[
                        headingStyles.heading, { color: isDarkMode ? '#FFF' : '#000', },
                    ]}>Hello World</Text>}
                />
                <LargeHeader headingStyle={headingStyles.heading} heading='React+NATIVE' />
                <FadingView />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}