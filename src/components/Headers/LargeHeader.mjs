import React from 'react';
import { 
    Text,
    StyleSheet, 
    View, 
    StyleProp, 
    ViewStyle 
} from 'react-native';

/**
 * @param { React.PropsWithChildren
 * & {
    * headerStyle: StyleProp<ViewStyle>,
    * headingStyle: StyleProp<ViewStyle>,
    * heading: String,
* } }
 * @returns {React.JSX.Element}
 */
const LargeHeader = ({
    headerStyle,
    headingStyle,
    children,
    heading
}) => {
    return (
        <View style={[styles.headerContainer, headerStyle]}>
            { heading 
                ? 
                <View style={styles.headingBox}>
                    <Text style={[styles.heading, headingStyle]}> { heading } </Text> 
                </View>
                : null
            }
            { children }
        </View>
    );
}

export default LargeHeader;

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingTop: 100,
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    headingBox: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    heading: {
        textAlign: 'center',
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
    }
});