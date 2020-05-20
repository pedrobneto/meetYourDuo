import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../../../util/colors'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({

    tabStyle: {
        flex: 1,
        width: screenWidth / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.lightGray
    }
})

export default styles;