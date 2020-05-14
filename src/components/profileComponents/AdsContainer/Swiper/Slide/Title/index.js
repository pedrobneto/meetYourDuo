import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import styles from './styles'

const Title = (props) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            {props.children}
        </View>

        <Text style={styles.textStyle}>
            {props.text}
        </Text>
    </View>
)

export default Title;