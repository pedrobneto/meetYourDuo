import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 5,
        marginTop: 30,
        width: screenWidth / 2,
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
        height: screenWidth / 7,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    nameTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    jobTextStyle: {
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