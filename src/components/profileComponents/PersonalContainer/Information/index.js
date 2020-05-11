import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import styles from './styles'

const IMG_URL = 'https://cdn.ome.lt/pMMHpeBz-OiMi1VlakFnZclt6kg=/1200x630/smart/extras/conteudos/matrix_4_jovem_neo.jpg'

const Information = (props) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: IMG_URL }} style={styles.imageStyle} />
        </View>
        <View style={styles.informationContainer}>
            <Text
                style={styles.nameTextStyle}
                numberOfLines={1}
            >
                Keanu Reeves, 22
            </Text>
            <Text
                style={styles.jobTextStyle}
                numberOfLines={1}
            >
                UFRN
            </Text>
        </View>
    </View>
)
export default Information;