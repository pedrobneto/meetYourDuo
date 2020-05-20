import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import Message from "./Message";

import profiles from '../../../../data'
import styles from './styles'

const MessagesList = (props) => (
    <View style={styles.containerStyle}>
        {profiles.map((profile) => (
            <Message
                uri={profile.uri}
                name={profile.name}
                msg={profile.msg}
                key={profile.id}
            />
        ))}
    </View>
)
export default MessagesList;