import React,{ useState,useEffect } from 'react';
import { View,Text,Image,StyleSheet,TextInput,TouchableOpacity,Animated } from 'react-native';
import type { LoginNavigationProps } from '../types/Navigation'
import LoginWay from '../components/LoginWay'
import styled from 'styled-components'
import Iconicons from 'react-native-vector-icons/Ionicons'
import userApi from '../api/User'


const loginWayData = [
    {
        text:'微信',
        logo:require('../../assets/loginPageIcon/logo-wechat.png'),
        line:true
    },
    {
        text:'QQ',
        logo:require('../../assets/loginPageIcon/logo-qq.png'),
        line:false
    }
]

export default class extends React.Component<LoginNavigationProps> {
    state = {
        titleTransform:new Animated.Value(0),
        move:new Animated.Value(158),
        message:""
    }
    componentDidMount(): void {
        Animated.parallel([
            Animated.timing(this.state.titleTransform,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(this.state.move,{
                toValue:50,
                duration:500,
                useNativeDriver:false
            })
        ]).start()
    }
    loginHandle(){
        this.props.navigation.navigate('TabNavigator')
    }
    render(): React.ReactNode {
        return (
            <Wrapper>
                <Header>
                    <Iconicons name="return-down-back-outline" size={24} color="black" style={ styles.Iconicons } onPress={() => this.props.navigation.goBack()} />
                </Header>
                <TitleTextAnimated style={{ transform:[{ scale:this.state.titleTransform }] }}>欢迎来到MyApp</TitleTextAnimated>
                <Text style={styles.regsiterTip}>未注册的手机号会验证后会自动注册账号</Text>
                <ContentMove style={{ marginTop:this.state.move }}>
                    <InputWrapper>
                        <InputIcon name="phone-portrait-outline" size={20} color="rgba(16,16,16,1)" style={styles.inputBorderRight} />
                        <Input placeholder='请输入手机号码' />
                    </InputWrapper>
                    <InputWrapper>
                        <InputIcon name="shield-checkmark-outline" size={20} color="rgba(16,16,16,1)" style={styles.inputBorderRight} />
                        <Input placeholder='请输入验证码' />
                        <InputButton onPress={() =>{}}>
                            <Text style={{ color:"white" }}>获取验证</Text>
                        </InputButton>
                    </InputWrapper>
                    <LoginBuutton onPress={() => this.loginHandle()}>
                        <Text style={{ color:"white",fontSize:16,fontWeight:"bold" }}>登录</Text>
                    </LoginBuutton>
                    <LoginWayContainer>
                        {loginWayData.map((item,index) => (
                            <LoginWay key={index} text={item.text} logo={item.logo} line={item.line} />
                        ))}
                    </LoginWayContainer>
                </ContentMove>
            </Wrapper>
        )
    }
}
const styles = StyleSheet.create({
    Iconicons:{
        width:24,
        height:24,
        position:'absolute',
        left:20,
        top:54,
    },
    inputBorderRight:{
        borderRightWidth:1,
        borderRightColor:"rgba(221,221,221,1)",
    },
    regsiterTip:{
        position:"absolute",
        top:"52%",
        textAlign:"center",
        width:"100%"
    }
})

const Wrapper = styled(View)`
    width: 100%;
    height: 100%;
    background: white;
`
const Header = styled(View)`
    width: 100%;
    height:88px;
`
const Content = styled(View)`
    flex-direction: column;
    align-items: center;
`
const ContentMove = Animated.createAnimatedComponent(Content)
const TitleText = styled(Text)`
    margin-top: 58px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: rgba(16, 16, 16, 1);
`
const TitleTextAnimated = Animated.createAnimatedComponent(TitleText)
const InputWrapper = styled(View)`
    position: relative;
    margin-bottom: 21px;
    width: 300px;
    height: 55px;
    border-radius: 30px;
    background-color: rgba(245,245,245,1);
    flex-direction: row;
    align-items: center;
`
const InputIcon = styled(Iconicons)`
    width: 10%;
    margin-left: 16px;
    text-align: center;
`
const Input = styled(TextInput)`
    width: 60%;
`
const InputButton = styled(TouchableOpacity)`
    position: absolute;
    right: 11px;
    width:74px;
    height: 32px;
    border-radius: 17px;
    justify-content: center;
    align-items: center;
    background-color: #000;
`
const LoginBuutton = styled(TouchableOpacity)`
    margin-top: 65px;
    width: 300px;
    height: 55px;
    border-radius: 30px;
    background-color: #000;
    justify-content: center;
    align-items: center;
`
const LoginWayContainer = styled(View)`
    margin-top: 42px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`