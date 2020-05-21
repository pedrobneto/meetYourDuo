import React, { useState } from "react";
import {
    View,
    Text
} from "react-native";

import Picture from '../../components/homeComponents/Picture/'
import Actions from '../../components/homeComponents/Actions/'

import styles from './styles'

const HomeScreen = (props) => {

    const [animation, setAnimation] = useState('')

    function animate(animation) {
        setAnimation(animation)
    }

    return (
        <View style={styles.containerStyle}>
            <Picture animation={animate} animationText={animation} />
            <Actions animation={animate} />
        </View>
    )
}
export default HomeScreen;