import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet
} from "react-native";

import styles from './styles'
import Matches from './Matches'

const images = [
    {
        uri: 'https://i.pinimg.com/236x/67/de/43/67de434a0454315add86f8aaf63205de.jpg',
        name: 'Fernanda',
        id: 1,
    },
    {
        uri: 'https://i.pinimg.com/236x/1f/7c/5e/1f7c5e3c18ebf73a64d6a3c4094862ed.jpg',
        name: 'Amanda',
        id: 2,
    },
    {
        uri: 'https://i.pinimg.com/236x/c4/de/fd/c4defdae276cfc7dba727777f3999750.jpg',
        name: 'Jéssica',
        id: 3,
    },
    {
        uri: 'https://i.pinimg.com/236x/0d/6f/35/0d6f35e136e99b9c4e9865294d16f5a7.jpg',
        name: 'Alana',
        id: 4,
    },
    {
        uri: 'https://i.pinimg.com/236x/8a/5e/92/8a5e92ed7ea1dd37d50cd55e4e5c861a.jpg',
        name: 'Fulana',
        id: 5,
    },
    {
        uri: 'https://i.pinimg.com/236x/91/01/d1/9101d112b2d99dd91898657411e4deda.jpg',
        name: 'Maria',
        id: 6,
    },
]

const MatchesContainer = (props) => {


    return (
        <ScrollView
            style={styles.containerStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate={5}
        >
            {images.map((image) => (
                <Matches
                    uri={image.uri}
                    name={image.name}
                    key={image.id}
                />
            ))}
        </ScrollView>
    )
}
export default MatchesContainer;