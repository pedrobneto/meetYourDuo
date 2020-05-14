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
        top: 50,
    },

    matchContainerTextStyle: {
        left: 40,
        borderColor: 'green',
        transform: [{ rotate: '-10deg' }]
    },

    unmatchContainerTextStyle: {
        right: 40,
        borderColor: 'red',
        transform: [{ rotate: '10deg' }]
    },

    textStyle: {
        fontSize: 32,
        paddingHorizontal: 10,

    },
})

export default styles;