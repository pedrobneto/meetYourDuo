import React from "react";
import {
    View,
    Text,
} from "react-native";

import Swiper from './Swiper/index'

import styles from './styles'

const AdsContainer = (props) => (
    <View style={styles.containerStyle}>
        <Swiper />
    </View>
)
export default AdsContainer;