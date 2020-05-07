import { StyleSheet, Platform, StatusBar } from 'react-native';

const statusBarHeight = Platform.select({
    ios: 20,
    android: StatusBar.currentHeight
})

const styles = StyleSheet.create({
    tabBarStyle: {
        marginTop: statusBarHeight,
    },

    tabBarOptionsStyle: {
        elevation: 1,
        shadowOpacity: 0,
    },

    indicatorStyle: {
        backgroundColor: 'transparent'
    }
});

export default styles;