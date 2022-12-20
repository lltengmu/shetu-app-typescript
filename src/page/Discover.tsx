import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureDetector,Gesture,GestureHandlerRootView } from 'react-native-gesture-handler'
import styled from 'styled-components';
import Iconicons from 'react-native-vector-icons/Ionicons'
import { tabNavigationProps } from '../types/Navigation';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    withRepeat,
    withSequence
} from 'react-native-reanimated';



export default function Discover() {

    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0 });
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
                { scale: withSpring(isPressed.value ? 1.2 : 1) },
            ],
            backgroundColor: isPressed.value ? 'yellow' : 'blue',
        };
    });
    const start = useSharedValue({ x: 0, y: 0 });
    const gesture = Gesture.Pan()
        .onBegin(() => {
            console.log("触摸到了")
            isPressed.value = true;
        })
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            };
        })
        .onEnd(() => {
            start.value = {
                x: offset.value.x,
                y: offset.value.y,
            };
        })
        .onFinalize(() => {
            isPressed.value = false;
        });
        const tapGesture = Gesture.Tap().onStart(() => {
            console.log("触摸到了")
        });
    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.ball,animatedStyles]}></Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    ball: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
});