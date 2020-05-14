import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import styles from './styles'
import Title from './Title/index'

const Slide = (props) => (
    <View style={styles.container}>
        <Title text={props.text} >
            {props.children}
        </Title>
        <Text>
            {props.descriptionText}
        </Text>
    </View>
)
export default Slide;