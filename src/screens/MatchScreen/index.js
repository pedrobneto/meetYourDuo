import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const MatchScreen = (props) => (
    <View style={styles.container}>
        <Text>MatchScreen</Text>
    </View>
)
export default MatchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});