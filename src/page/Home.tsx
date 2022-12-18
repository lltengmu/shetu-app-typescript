import React from 'react';
import type { HomeNavigationProps, tabNavigationProps } from '../types/Navigation';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView, } from 'react-native';
import HomeTabHeader from '../components/HomeTabHeader';
import styled from 'styled-components'
import TabIcons from '../components/TabIcons';
import DefaultImageCard from '../components/DefaultImageCard'
import renderApi from '../api/resource'


export default class Home extends React.Component<tabNavigationProps>{
    state: Readonly<HomeState<HomeResourceData>> = {
        LeftQueueCards: [],
        RightQueueCards: []
    }
    async componentDidMount(): Promise<void> {
        const response = await renderApi.getHomePageResource();
        this.setState({ LeftQueueCards: response.data.filter(item => item.id % 2 !== 0) })
        this.setState({ RightQueueCards: response.data.filter(item => item.id % 2 === 0) })
    }
    render(): React.ReactNode {
        return (
            <Container>
                <HomeTabHeader />
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <ContentContainer>
                            <LeftWrapper>
                                {this.state.LeftQueueCards.map((item, index) => (
                                    <DefaultImageCard
                                        key={index}
                                        imgHttp={item.path}
                                        title={item.title}
                                        content={item.content}
                                        downloads={item.downloads}
                                        isSquare={item.isSquare}
                                    />
                                ))}
                            </LeftWrapper>
                            <RightWrapper>
                                {this.state.RightQueueCards.map((item, index) => (
                                    <DefaultImageCard
                                        key={index}
                                        imgHttp={item.path}
                                        title={item.title}
                                        content={item.content}
                                        downloads={item.downloads}
                                        isSquare={item.isSquare}
                                    />
                                ))}
                            </RightWrapper>
                        </ContentContainer>
                    </ScrollView>
                </SafeAreaView>
            </Container>
        )
    }
}

const Container = styled(View)`
    width: 100%;
    height: 100%;
    background: #fff;
`
const Seach = styled(TextInput)``

const ContentContainer = styled(View)`
    margin: 0 auto;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
`
const LeftWrapper = styled(View)`
    width: 48%;
    flex-direction: column;
`
const RightWrapper = styled(View)`
    width: 48%;
    flex-direction: column;
`
