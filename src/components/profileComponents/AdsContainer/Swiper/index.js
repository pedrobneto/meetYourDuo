import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Swiper from 'react-native-swiper'

import styles from './styles'

const SwiperComp = (props) => (
    <Swiper >
        <View style={styles.container}>
            <Text>SwiperComp</Text>
        </View>
        <View style={styles.container}>
            <Text>SwiperComp</Text>
        </View>
    </Swiper>
)
export default SwiperComp;