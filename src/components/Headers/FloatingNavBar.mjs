import { Pressable, StyleSheet, View } from "react-native";
import { BonFireIcon } from "../Icons/BonFireIcon.mjs";
import { HomeIcon } from "../Icons/HomeIcon.mjs";
import { SafeAreaView } from "react-native-safe-area-context";

export const FloatingNavBar = ({
    props, 
    onHomePress= () => alert('Home!'),
    onOtherPress=() => alert('Home!'),
}) => {

    return (
        <SafeAreaView>
            <View style={styles.barBox}>
                <Pressable 
                    onPress={ onHomePress }
                    style={ [
                        styles.svg,
                        ({ pressed }) => [
                            { backgroundColor: pressed ? 'rgb(0, 115, 255)' : 'transparent', },
                        ]
                    ]}
                >
                    <HomeIcon />
                </Pressable>
                <Pressable 
                    onPress={ onOtherPress }
                    style={ [
                        styles.svg,
                        ({ pressed }) => [
                            { backgroundColor: pressed ? 'rgb(0, 115, 255)' : 'transparent', },
                        ]
                    ]}
                >
                    <BonFireIcon />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    barBox: {
        flex: 1,
        flexDirection: 'row',
    },
    svg: {
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 5,
    }
});