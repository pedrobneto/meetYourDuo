import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconContainer: {
        marginRight: 10,
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})

export default styles;