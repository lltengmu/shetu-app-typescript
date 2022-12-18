import React from 'react';
import { View,Text } from 'react-native'
import styled from 'styled-components';


export default class Discover extends React.Component<any>{
    constructor(props:any){
        super(props)
    }
    render(): React.ReactNode {
        return (
            <View>
                <Text style={{ textAlign:'center',marginTop:'50%' }}>这是个人中心页面</Text>
            </View>            
        )
    }
}

const Container = styled(View)`
    width: 100%;
    height: 100%;
`