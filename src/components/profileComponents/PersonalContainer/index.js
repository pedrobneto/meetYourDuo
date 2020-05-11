import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

import { Svg, Circle } from 'react-native-svg'

import Information from './Information'
import ButtonsContainer from './ButtonsContainer'

import styles from './styles'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const PersonalContainer = (props) => (
    <View style={styles.containerStyle}>
        <View style={styles.svgContainerStyle}>
            <Svg height={screenHeight * 0.7} width={screenWidth}>
                <Circle cx={screenWidth / 2} cy="0" r={screenHeight * 0.65} fill="white" />
            </Svg>
        </View>
        <View style={styles.informationContainerStyle}>
            <Information />
            <ButtonsContainer />
        </View>
    </View>
)
export default PersonalContainer;