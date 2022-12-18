import React from 'react';
import { View ,TextInput} from 'react-native';
import styled from 'styled-components';
import Iconicons from 'react-native-vector-icons/Ionicons'

export default class HomeTabHeader extends React.Component<any>{
    constructor(props: any) {
        super(props)
    }
    render(): React.ReactNode {
        return (
            <Header>
                <SeachWrapper>
                    <Iconicons name='search-outline' size={24} color="black" />
                    <Input placeholder="搜索热门壁纸" />
                </SeachWrapper>
                <Iconicons name="phone-portrait-outline" size={24} color="rgba(16,16,16,1)" />
            </Header>
        )
    }
}
const Header = styled(View)`
    margin: 0 auto;
    width: 92%;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const SeachWrapper = styled(View)`
    margin:20px 0;
    width: 85%;
    height: 40px;
    border-radius:25px;
    background-color: rgb(245,245,245);
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Input = styled(TextInput)`
    width: 80%;
    height: 100%;
`