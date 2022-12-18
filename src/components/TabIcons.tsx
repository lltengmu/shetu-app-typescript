import React from 'react';
import { Animated, View,Image, ImageSourcePropType, } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

interface Tabiconstate {
    shake:Animated.Value,
    isAcitive?:Boolean
}
interface Props {
    TabName:string
    source:ImageSourcePropType,
    isActive?:Boolean,
}

export default class TabIcons extends React.Component<Props,Tabiconstate> {
    constructor(props:Props){
        super(props)
        this.state = {
            shake:new Animated.Value(0),
            isAcitive:false
        }
    }
    render(): React.ReactNode {
        return (
            <View>
                <Animated.View onTouchStart={() => console.log("components is touch")} style={{
                    transform:[
                        {
                            rotateZ:this.state.shake.interpolate({
                                inputRange:[0,1],
                                outputRange:['0deg','180deg']
                            })
                        }
                    ]
                }}>
                    <Image source={this.props.source} style={{ width:25,height:25 }} />
                </Animated.View>
            </View>
        )
    }
}
