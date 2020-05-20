import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    containerStyle: {
        marginRight: 10,
        width: screenWidth / 4.5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    imageContainerStyle: {
        height: screenWidth / 5.5,
        width: screenWidth / 5.5,
        borderRadius: 100,
        overflow: 'hidden',
    },

    textContainerStyle: {
        height: screenWidth / 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        height: undefined,
        width: undefined,
        flex: 1,
    },

    textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;