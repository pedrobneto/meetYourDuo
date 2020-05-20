import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";
import SearchBar from './SearchBar'
import Title from './Title'

import styles from './styles'
import MatchesContainer from "./MatchesContainer";
import MessagesList from "./MessageList";

const Messages = (props) => (
    <View style={styles.containerStyle}>
        <ScrollView >
            <SearchBar />
            <Title number='3'>
                Novos Matches
            </Title>
            <MatchesContainer />
            <Title number='6' >
                Mensagens
            </Title>
            <MessagesList />
        </ScrollView>
    </View>
)
export default Messages;