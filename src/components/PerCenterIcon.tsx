import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import styled from 'styled-components';



export default class extends React.Component<any>{
    constructor(props:any){
        super(props)
    }
    render(): React.ReactNode {
        return (
            <Wrapper style={{ borderColor:this.props.isActive ? '#000' : '#fff',elevation:3 }}>
                <Picture source={require("../../assets/perCenter.jpg")}/>
            </Wrapper>
        )
    }
}



const Wrapper = styled(View)`
    width: 32px;
    height: 32px;
    border: 2px solid;
    border-radius:50px;
`
const Picture = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`