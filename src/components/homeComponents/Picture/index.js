import React from "react";
import {
    View,
    Text,
    Image,
} from "react-native";

import styles from './styles'

const IMAGE_URL = 'https://br.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg'

const Picture = (props) => (
    <View style={styles.containerStyle}>
        <Image
            style={styles.imageStyle}
            resizeMode='cover'
            source={{ uri: IMAGE_URL }}
        />
    </View>
)

export default Picture;