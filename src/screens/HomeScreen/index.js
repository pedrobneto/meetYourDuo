import React from "react";
import {
    View,
    Text
} from "react-native";

import Picture from '../../components/homeComponents/Picture/'
import Actions from '../../components/homeComponents/Actions/'

import styles from './styles'

const HomeScreen = (props) => (
    <View style={styles.containerStyle}>
        <Picture />
        <Actions />
    </View>
)
export default HomeScreen;