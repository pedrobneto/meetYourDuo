import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 8,
        backgroundColor: 'white',
        width: windowWidth - 10,
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden'
    },

    imageStyle: {
        height: undefined,
        width: undefined,
        flex: 1,
    },

    textContainerStyle: {
        borderWidth: 1,
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
        left: windowWidth / 2 - 80,
        width: '40%',
        transform: [{ rotate: '-10deg' }],

    },

    textStyle: {
        fontSize: 32,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
})

export default styles;