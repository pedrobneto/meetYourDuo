import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    Animated,
    PanResponder,
    Dimensions
} from "react-native";

import styles from './styles'
import profiles from '../../../data'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

const Picture = (props) => {

    const pan = useRef(new Animated.ValueXY()).current
    const [index, setIndex] = useState(0);

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
                    dislike(gestureState.dy)
                } else if (gestureState.dx < -120 && gestureState.vx < -0.3) {
                    like(gestureState.dy)
                } else if (gestureState.dy < -200 && gestureState.vy < -0.3) {
                    superLike(gestureState.dx)
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: true
                    }).start()
                }
            }
        })
    ).current;

    const rotate = pan.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
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

    const backCardOpacity = Animated.add(pan.x, pan.y).interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.5, 1],
        extrapolate: 'clamp'
    })

    const backCardScale = Animated.add(pan.x, pan.y).interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.9, 1],
        extrapolate: 'clamp'
    })

    // Animates when the user clicks the buttons based on the animationText prop
    useEffect(() => {
        switch (props.animationText) {
            case 'like':
                like(0)
                break;
            case 'dislike':
                dislike(0)
                break;
            case 'superLike':
                superLike(0)
                break;
            default:
                break;
        }
    }, [props.animation]);

    useEffect(() => {
        if (index > profiles.length - 1) {
            setIndex(0)
        }
    }, [index])

    function updateIndex() {
        // Update the index
        setIndex(index => index + 1)

        // Sets the animation to the default value so it doesn't animate again
        props.animation('')

        // Resets image position
        pan.setValue({ x: 0, y: 0 })
    }

    function like(distance) {
        Animated.spring(pan, {
            toValue: { x: -SCREEN_WIDTH - 100, y: distance },
            tension: 3,
            useNativeDriver: true
        }).start(() => {
            updateIndex()
        })
    }

    function dislike(distance) {
        Animated.spring(pan, {
            toValue: { x: SCREEN_WIDTH + 100, y: distance },
            tension: 20,
            useNativeDriver: true
        }).start(() => {
            updateIndex()
        })
    }

    function superLike(distance) {
        Animated.spring(pan, {
            toValue: { x: distance, y: -SCREEN_HEIGHT - 100 },
            tension: 20,
            useNativeDriver: true
        }).start(() => {
            updateIndex()
        })
    }

    function renderProfiles() {
        return profiles.map((profile) => {

            // If the image was already swiped, don't show it
            if (profile.id < index || profile.id - index > 1) {
                return null
            }
            // If it's the current image, render it with the pan responder and the animated texts
            else if (profile.id == index) {
                return (
                    <Animated.View
                        key={profile.id}
                        style={[
                            styles.imageContainerStyle,
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: rotate }] }
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Image
                            style={styles.imageStyle}
                            resizeMode='cover'
                            source={{ uri: profile.uri }}
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
            else {
                return (
                    // If the image is under it, don't load the pan responder
                    <Animated.View
                        key={profile.id}
                        style={[
                            styles.imageContainerStyle,
                            { opacity: backCardOpacity, transform: [{ scale: backCardScale }] }
                        ]}
                    >
                        <Image
                            style={styles.imageStyle}
                            resizeMode='cover'
                            source={{ uri: profile.uri }}
                        />
                    </Animated.View>
                )
            }
        }).reverse()
    }

    return (
        <View style={styles.containerStyle}>
            {renderProfiles()}
        </View>
    )
}

export default Picture;