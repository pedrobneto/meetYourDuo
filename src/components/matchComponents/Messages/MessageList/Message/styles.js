import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../../../util/colors'

const screenWidth = Dimensions.get('screen').width


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
    },

    imageContainerStyle: {
        height: screenWidth / 5.5,
        width: screenWidth / 5.5,
        borderRadius: 100,
        overflow: 'hidden',
    },

    imageStyle: {
        height: undefined,
        width: undefined,
        flex: 1,
    },

    textContainerStyle: {
        marginLeft: 10,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: colors.lightGray,
        width: '100%',
    },

    nameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    msgTextStyle: {
        fontSize: 14,
    }
});

export default styles;