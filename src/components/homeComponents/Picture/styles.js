import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 8,
        backgroundColor: 'transparent',
        width: windowWidth - 10,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundTextStyle: {
        fontSize: 18,
        color: 'gray',
    },

    imageContainerStyle: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden',
    },

    imageStyle: {
        height: undefined,
        width: undefined,
        flex: 1,
    },

    textContainerStyle: {
        borderWidth: 3,
        position: 'absolute',
        borderRadius: 5,
    },

    matchContainerTextStyle: {
        right: 40,
        top: 50,
        borderColor: 'green',
        transform: [{ rotate: '10deg' }]
    },

    unmatchContainerTextStyle: {
        left: 40,
        top: 50,
        borderColor: 'red',
        transform: [{ rotate: '-10deg' }]
    },

    superLikeContainerTextStyle: {
        borderColor: 'blue',
        bottom: 50,
        left: '50%',
        width: '40%',
        transform: [
            { rotate: '-10deg' },
            { translateX: -windowWidth * 0.2 }
        ],

    },

    textStyle: {
        fontSize: 32,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
})

export default styles;