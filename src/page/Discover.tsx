import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
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


export default function Discover(){
        const rotation = useSharedValue(0);
        const defaultSpringStyles = useAnimatedStyle(() => {
            return {
                transform: [{ rotateZ: `${rotation.value}deg` }],
            };
          });
        const onPressHandle = () => {
            rotation.value = withSequence(
                withTiming(-10, { duration: 50 }),
                withRepeat(withTiming(10, { duration: 100 }), 6, true),
                withTiming(0, { duration: 50 })
              );
        }
    return (
        <View>
            <Animated.View style={[styles.boxDafault, defaultSpringStyles]} />
            <Text style={styles.Text} onPress={onPressHandle}>Move</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxDafault:{
        top:160,
        width:50,
        height:50,
        borderRadius:5,
        backgroundColor:"rgb(0,26,114)"
    },
    box:{
        top:180,
        width:50,
        height:50,
        borderRadius:5,
        backgroundColor:"rgb(0,26,114)"
    },
    Text:{
        position:"absolute",
        top:300,
        textAlign:'center',
        width:'100%',
        height:30,
        fontSize:20,
        color:"#3498db",
    }
})