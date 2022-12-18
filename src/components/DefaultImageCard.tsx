import React from 'react';
import { View,Image,Text } from 'react-native'
import Iconicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components';


export default class DefaultImageCard extends React.Component<any> {
    render(): React.ReactNode {
        return (
            <Container>
                <ShowImage style={{ height:this.props.isSquare ? 160 : 210 }} source={{ uri:this.props.imgHttp }} />
                <Title>{this.props.title}</Title>
                <ContentContainer>
                    <Content>{this.props.content}</Content>
                    <DownLoadContainer>
                        <Iconicons name='download-outline' size={15} color="rgba(0,0,0,.5)" />
                        <DownLoads>{ this.props.downloads }</DownLoads>
                    </DownLoadContainer>
                </ContentContainer>
            </Container>
        )
    }
}

const Container = styled(View)`
    margin-bottom:30px;
    width: 100%;
`
const ShowImage = styled(Image)`
    margin-bottom: 14px;
    width: 100%;
    border-radius: 8px;
`
const Title = styled(Text)`
    font-size: 16px;
    color: black;
    margin-bottom: 6px;
`
const ContentContainer = styled(View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
`
const Content = styled(Text)`
    width: 70%;
    font-size: 14px;
    color: gray;
    opacity: 0.5;
`
const DownLoadContainer = styled(View)`
    width: 30%;
    flex-direction: row;
    align-items: center;
`
const DownLoads = styled(Text)`
    padding-top: 2px;
    font-size: 12px;
`