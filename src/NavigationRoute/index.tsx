import React from "react";
import StartUp from '../page/startUp'
import Login from '../page/login'
import TabNavigator from "./TabNavigator";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,NativeStackScreenProps } from "@react-navigation/native-stack";


const RootStack = createNativeStackNavigator<RootStackParamsList>()


export default class NavgationRoute extends React.Component<any> {
    render(): React.ReactNode {
       return  (
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{ headerShown:false}}>
                    <RootStack.Screen name='StartUp' component={StartUp}/>
                    <RootStack.Screen name='Login' component={Login} options={{animation:'slide_from_left'}} />
                    <RootStack.Screen name='TabNavigator' component={TabNavigator} options={{animation:'slide_from_bottom'}} />
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}