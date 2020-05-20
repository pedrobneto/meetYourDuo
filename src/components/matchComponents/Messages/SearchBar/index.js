import React from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

const SearchBar = (props) => (
    <View style={styles.containerStyle}>
        <View style={styles.iconContainerStyle}>
            <Ionicons name="ios-search" size={26} color="red" />
        </View>
        <View style={styles.inputContainerStyle}>
            <TextInput
                style={styles.inputStyle}
                placeholder='Buscar 10 Matches'
                selectionColor='red'
            />
        </View>
    </View>
)
export default SearchBar;