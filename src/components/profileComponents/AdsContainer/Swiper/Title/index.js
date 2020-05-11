import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import styles from './styles'

const Title = (props) => (
    <View style={styles.container}>

        {props.children}

        <Text>
            {props.text}
        </Text>
    </View>
)

export default Title;