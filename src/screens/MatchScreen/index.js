import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import Header from '../../components/matchComponents/Header'
import Messages from '../../components/matchComponents/Messages'
import Feed from '../../components/matchComponents/Feed'

import styles from './styles'

const MatchScreen = (props) => {

    const [message, setMessage] = useState(false)

    function renderMessage() {
        if (props.screen === 'feed') {
            return <Feed />
        }
        else return <Messages />
    }

    return (
        <View style={styles.containerStyle}>
            <Header screen={message} />
            {renderMessage()}
        </View>
    );
}

function mapStateToProps(state) {
    const { screen } = state;

    return { screen }
}

export default connect(mapStateToProps)(MatchScreen);