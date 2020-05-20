import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import styles from './styles'

const Title = (props) => (
    <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
            {props.children}
        </Text>
        <View style={styles.numberContainer}>
            <Text style={styles.numberTextStyle}>
                {props.number}
            </Text>
        </View>
    </View>
)
export default Title;