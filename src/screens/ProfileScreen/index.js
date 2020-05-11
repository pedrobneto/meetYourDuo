import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import PersonalContainer from '../../components/profileComponents/PersonalContainer'
import AdsContainer from '../../components/profileComponents/AdsContainer'

import styles from './styles'

const ProfileScreen = (props) => (
    <View style={styles.container}>
        <PersonalContainer />
        <AdsContainer />
    </View>
)
export default ProfileScreen;