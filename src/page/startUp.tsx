import React, { AnimationEventHandler } from 'react';
import { Image, Text, View,Animated,Dimensions,NativeModules, LayoutChangeEvent,TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Iconicons from 'react-native-vector-icons/Ionicons'
import { ParamListBase,useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { startUpNavigationProps } from '../types/Navigation'




const MenuWidth = 50;
const screenWidth = (Dimensions.get('window').width - MenuWidth) /2;
const getLogoTop = Math.floor((Dimensions.get('window').height) * 0.36)


export default class StartUp extends React.Component<startUpNavigationProps> {
    state = { 
        left:new Animated.Value(100),
        opcity:new Animated.Value(0),
        logoMove:new Animated.Value(getLogoTop),
        logoTransform:new Animated.Value(0)
    }
    componentDidMount():void{
        //组件被渲染之后的生命周期函数,定义动画触发的时机
        Animated.parallel([
            Animated.timing(this.state.left,{
                toValue:screenWidth,
                useNativeDriver:false
            }),
            Animated.timing(this.state.opcity,{
                toValue:1,
                useNativeDriver:false
            }),
            Animated.timing(this.state.logoMove,{
                toValue:getLogoTop + 20,
                useNativeDriver:false
            }),
            Animated.timing(this.state.logoTransform,{
                toValue:1,
                useNativeDriver:false
            })
        ]).start()
        
    }
    toLoginPage = () => {
        this.props.navigation.navigate('Login')
    }
    render(): React.ReactNode {
        return (
            <Wrapper>
                <AnimateImageView source={require('../../assets/startPage.png')} style={{ opacity:this.state.opcity }} />
                <AniationLogo 
                    source={require('../../assets/logo.png')} 
                    style={{ 
                        top:this.state.logoMove,
                        transform:[
                            {
                                rotateZ:this.state.logoTransform.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['-45deg','0deg']
                                })
                            }
                        ] 
                    }} 
                />
                <TextWrapper>打开生活，发现美好</TextWrapper>
                <AnimateIconView style={{ left:this.state.left,width:MenuWidth,height:MenuWidth }} onPress={this.toLoginPage}>
                    <Iconicons name="arrow-forward-outline" size={20} color="white" style={{ zIndex:200 }} />
                </AnimateIconView>
            </Wrapper>
        )
    }
}


const Wrapper = styled(View)`
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const ImageView = styled(Image)`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const AnimateImageView = Animated.createAnimatedComponent(ImageView)

const Logo = styled(Image)`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left:-25px;
`
const AniationLogo = Animated.createAnimatedComponent(Logo)

const TextWrapper = styled(Text)`
    color: white;
    font-size: 18px;
`

const IconView = styled(TouchableOpacity)`
    position: absolute;
    top: 55%;
    border-radius: 25px;
    background: rgba(232,52,52,1);
    box-shadow: 0 5px 10px rgba(250,250,250,0.8);
    justify-content: center;
    align-items: center;
    animation-timing-function: ease;
`
const AnimateIconView = Animated.createAnimatedComponent(IconView)