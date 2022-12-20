import * as React from 'react';
import type { startUpNavigationProps } from '../types/Navigation';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, useAnimatedGestureHandler } from 'react-native-reanimated';
import { TapGestureHandler, PanGestureHandler, GestureDetector,Gesture } from 'react-native-gesture-handler';
import Iconicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/startUp';

const left = Dimensions.get('window').width / 20
const diviceWidth = Dimensions.get('window').width
const screenWidth = (Dimensions.get('window').width) / 2 - 25 - left;

const SlideBlock = Animated.createAnimatedComponent(TouchableOpacity)


export default ({ navigation }: startUpNavigationProps): React.ReactElement => {

    
    const handlePress = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.containner}>
            <Image source={require('../../assets/startPage.png')} style={[styles.bgImage]} />
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.textWrapper}>打开生活，发现美好</Text>
            <TouchableOpacity onPress={handlePress} style={[styles.iconView]}>
                <Iconicons name="arrow-forward-outline" size={20} color="white" style={{ zIndex: 200 }} />
            </TouchableOpacity>
        </View>
    )
}



