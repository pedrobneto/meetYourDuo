import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const SMALL_BUTTON_SIZE = windowWidth / 8
const BIG_BUTTON_SIZE = windowWidth / 6

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: windowWidth,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },

    buttonStyle: {
        backgroundColor: 'white',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    smallButtonStyle: {
        width: SMALL_BUTTON_SIZE,
        height: SMALL_BUTTON_SIZE,
        borderRadius: SMALL_BUTTON_SIZE / 2,
    },

    bigButtonStyle: {
        width: BIG_BUTTON_SIZE,
        height: BIG_BUTTON_SIZE,
        borderRadius: BIG_BUTTON_SIZE / 2,
    },
})

export default styles;