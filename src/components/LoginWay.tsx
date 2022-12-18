import React,{ type PropsWithChildren } from 'react';
import { TouchableOpacity,Text,View,Image,ImageSourcePropType } from 'react-native'
import styled from 'styled-components';

export interface Props{
    text:string,
    logo: ImageSourcePropType,
    line:boolean
}

const LoginWay:React.FC<Props>= (props) => {
    return (
            <>
                <Container>
                    <Iconicons source={props.logo} />
                    <Text style={{ fontSize:14 }}>{ props.text }</Text>
                    <Splitline style={{ opacity:props.line ? 1 : 0 }} />
                </Container>
            </>
    )
}

const Container = styled(TouchableOpacity)`
    padding: 0 31px;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Iconicons = styled(Image)`
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
`
const Splitline = styled(View)`
    position: absolute;
    right: 0;
    width: 1px;
    height: 20px;
    background-color: #ddd;
`
export default LoginWay