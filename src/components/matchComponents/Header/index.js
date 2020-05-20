import React from "react";
import {
    View,
    Text,
} from "react-native";
import VerticalSeparator from '../../globalComponents/VerticalSeparator'
import TabButton from './TabButton'

import styles from './styles'

const Header = (props) => (
    <View style={styles.containerStyle}>
        <TabButton isMsgTab={true}>
            Messages
        </TabButton>
        <VerticalSeparator />
        <TabButton isMsgTab={false}>
            Feed
        </TabButton>
    </View>
)
export default Header;