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

const Messages = (props) => (
    <ScrollView style={styles.containerStyle}>
        <SearchBar />
        <Title number='3'>
            Novos Matches
        </Title>
        <MatchesContainer />
        <Title number='6' >
            Mensagens
        </Title>
    </ScrollView>
)
export default Messages;