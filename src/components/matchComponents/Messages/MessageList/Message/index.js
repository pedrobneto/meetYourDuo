import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import styles from './styles'
const IMAGE_URL = 'https://br.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg'

const Message = (props) => (
    <TouchableOpacity>
        <View style={styles.containerStyle}>
            <View style={styles.imageContainerStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: props.uri }}
                />
            </View>
            <View style={styles.textContainerStyle}>
                <Text style={styles.nameTextStyle}>{props.name}</Text>
                <Text style={styles.msgTextStyle}>{props.msg}</Text>
            </View>
        </View>
    </TouchableOpacity>
)
export default Message;