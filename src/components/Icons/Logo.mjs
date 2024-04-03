import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Path, Svg } from "react-native-svg";

export const Logo = ({ props, style, width: _width = 40 , height: _height = 40}) => {
    return (
        <SafeAreaView>
            <View style={ styles.logoBox }>
                <Svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16" 
                    width={ _width }
                    height={ _height }
                    {...props}
                >
                    <Path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={1.42}
                    d="M13.2 3.82c.47 0 .66-.02 1.16.03.01.7.03 1.44.01 2.94l.88.98-.86.91c.01 1.28.14 2.4-.19 2.9-.21.32-.42.23-1 .24m-10.43.07c-.46 0-.66-.04-1.16-.08V8.86l-.89-.98.87-.91c-.01-1.28-.14-2.4.2-2.9.2-.32.41-.23 1-.24"
                    />
                    <Path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="square"
                    strokeWidth={1.42}
                    d="m4.14 10.08-.01-4.03L5.59 6c.42 0 .68-.03.86.1.15.1.21.13.34.35.09.27.12.34.12 1.16.02 1.14.01 1.28.01 2.45"
                    />
                    <Path
                    stroke="#000"
                    strokeWidth={1.49}
                    d="M10.4 8.02c.37.73.74 1.29 1.02 1.78.22.37.4.7.4 1.03m-2.7-1.87 1.95-2.56s.67-.73.67-1.13M9.05 3.13v7.71"
                    />
                </Svg>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoBox: {
        flex: 1,
        backgroundColor: '#f200ff',
        padding: 5,
        borderRadius: 10,
    }
});