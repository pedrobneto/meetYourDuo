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
        console.log(animation)
    }

    return (
        <View style={styles.containerStyle}>
            <Picture animation={animation} animationText={animate} />
            <Actions animation={animate} />
        </View>
    )
}
export default HomeScreen;