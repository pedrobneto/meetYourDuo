import React, { useRef } from "react";
import {
    View,
    Text,
    Image,
    Animated,
    PanResponder,
    Dimensions
} from "react-native";

import styles from './styles'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const IMAGE_URL = 'https://br.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg'

const Picture = (props) => {

    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                pan.setValue({
                    x: gestureState.dx,
                    y: gestureState.dy
                })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120 && gestureState.vx > 0.3) {
                    dislike(evt, gestureState)
                } else if (gestureState.dx < -120 && gestureState.vx < -0.3) {
                    like(evt, gestureState)
                } else if (gestureState.dy < -200 && gestureState.vy < -0.3) {
                    superLike(evt, gestureState)
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                    }).start()
                }
            }
        })
    ).current;

    const rotate = pan.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['10deg', '0deg', '-10deg'],
        extrapolate: 'clamp'
    })

    const matchTextOpacity = pan.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
    })

    const unmatchTextOpacity = pan.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
    })

    const superLikeTextOpacity = pan.y.interpolate({
        inputRange: [-SCREEN_HEIGHT / 2, 0, SCREEN_HEIGHT / 2],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
    })

    function like(evt, gestureState) {
        Animated.spring(pan, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
        }).start(() => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
            }).start()
        })
    }

    function dislike(evt, gestureState) {
        Animated.spring(pan, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
        }).start(() => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
            }).start()
        })
    }

    function superLike(evt, gestureState) {
        Animated.spring(pan, {
            toValue: { x: gestureState.dx, y: -SCREEN_HEIGHT - 100 }
        }).start(() => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
            }).start()
        })
    }

    return (
        <Animated.View
            style={[
                styles.containerStyle,
                { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: rotate }] }
            ]}
            {...panResponder.panHandlers}
        >
            <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: IMAGE_URL }}
            />

            <Animated.View
                style={[
                    styles.textContainerStyle,
                    styles.matchContainerTextStyle,
                    { opacity: matchTextOpacity }
                ]}
            >
                <Text style={[styles.textStyle, { color: 'green' }]}>
                    LIKE
                </Text>
            </Animated.View>

            <Animated.View
                style={[
                    styles.textContainerStyle,
                    styles.unmatchContainerTextStyle,
                    { opacity: unmatchTextOpacity }
                ]}
            >
                <Text style={[styles.textStyle, { color: 'red' }]}>
                    NOPE
                </Text>
            </Animated.View>

            <Animated.View
                style={[
                    styles.textContainerStyle,
                    styles.superLikeContainerTextStyle,
                    { opacity: superLikeTextOpacity }
                ]}
            >
                <Text style={[styles.textStyle, { color: 'blue' }]}>
                    SUPER LIKE
                </Text>
            </Animated.View>


        </Animated.View>
    )
}

export default Picture;