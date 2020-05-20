import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import { connect } from 'react-redux'
import { msgTab, feedTab } from '../../../../store/actions'

import styles from './styles'

const TabButton = (props) => {

    function tabPressed() {
        if (props.isMsgTab) {
            props.dispatch(msgTab())
        } else {
            props.dispatch(feedTab())
        }
    }

    function renderTitle() {
        if (props.isMsgTab) {
            return (
                <Text style={[styles.textStyle, { color: props.msgTabColor }]}>
                    {props.children}
                </Text>
            )
        } else {
            return (
                <Text style={[styles.textStyle, { color: props.feedTabColor }]}>
                    {props.children}
                </Text>)
        }

    }
    return (
        <TouchableOpacity onPress={tabPressed}>
            <View style={styles.tabStyle}>
                {renderTitle()}
            </View>
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    const { msgTabColor, feedTabColor } = state;

    return { msgTabColor, feedTabColor }
}

export default connect(mapStateToProps)(TabButton);