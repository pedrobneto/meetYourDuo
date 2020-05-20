import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../../util/colors'

const screenHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    containerStyle: {
        height: screenHeight / 15,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: colors.lightGray,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})

export default styles;