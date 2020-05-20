import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View
} from "react-native";
import Matches from './Matches'

import styles from './styles'
import profiles from '../../../../data/index'

const MatchesContainer = (props) => {


    return (
        <View style={styles.containerStyle}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={5}
            >
                {profiles.map((profile) => (
                    <Matches
                        uri={profile.uri}
                        name={profile.name}
                        key={profile.id}
                    />
                ))}
            </ScrollView>
        </View>
    )
}
export default MatchesContainer;