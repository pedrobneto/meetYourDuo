import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../../../../util/colors'

const screenWidth = Dimensions.get('screen').width
const BUTTON_SIZE = screenWidth / 6

const styles = StyleSheet.create({

    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGray,
        height: BUTTON_SIZE,
        width: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE / 2

    },

    textContainerStyle: {
        marginTop: 10,
        alignItems: 'center',
        width: screenWidth / 4,
        justifyContent: 'center'
    },

    textStyle: {
        textAlign: 'center',
        color: 'gray'
    },
});

export default styles;