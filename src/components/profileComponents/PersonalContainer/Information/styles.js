import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 5,
        zIndex: 100,
        marginTop: 30,
        width: '50%',
        alignItems: 'center',
    },

    imageContainer: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        borderRadius: screenWidth / 6,
        overflow: 'hidden',
    },

    informationContainer: {
        width: screenWidth / 2,
        height: '30%',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    nameTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    jobTextStyle: {
        marginTop: 5,
        fontSize: 18,
    },

    imageStyle: {
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        flex: 1,
    }
});

export default styles;