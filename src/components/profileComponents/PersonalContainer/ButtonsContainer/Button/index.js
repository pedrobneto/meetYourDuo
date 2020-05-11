import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import styles from './styles'

const Button = (props) => (
    <View style={[styles.containerStyle, { marginTop: props.margin }]}>
        <TouchableOpacity>
            <View
                style={[
                    styles.buttonContainerStyle,
                    { backgroundColor: props.color }
                ]}
            >
                {props.children}
            </View>
        </TouchableOpacity>
        <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
        </View>
    </View>
)
export default Button;