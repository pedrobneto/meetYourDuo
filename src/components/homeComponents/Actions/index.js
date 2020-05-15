import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import { Entypo, Foundation, MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons';

import styles from './styles'
import colors from '../../../util/colors'

const Actions = (props) => {

    function likeClick() {
        props.animation('like')
    }

    function dislikeClick() {
        props.animation('dislike')
    }

    function superLikeClick() {
        props.animation('superLike')
    }

    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity>
                <View style={[styles.buttonStyle, styles.smallButtonStyle]}>
                    <Entypo name="back-in-time" size={30} color={colors.yellow} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={dislikeClick}>
                <View style={[styles.buttonStyle, styles.bigButtonStyle]}>
                    <Foundation name="x" size={40} color={colors.pink} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={superLikeClick}>
                <View style={[styles.buttonStyle, styles.smallButtonStyle]}>
                    <MaterialCommunityIcons name="star" size={30} color={colors.blue} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={likeClick}>
                <View style={[styles.buttonStyle, styles.bigButtonStyle]}>
                    <Octicons name="heart" size={40} color={colors.green} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.buttonStyle, styles.smallButtonStyle]}>
                    <FontAwesome name="bolt" size={30} color={colors.purple} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Actions;