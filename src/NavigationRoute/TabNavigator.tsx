import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../composable/Tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabIcons from '../components/TabIcons';

const Tab = createMaterialTopTabNavigator<TabParamList>()

export default class TabNavigator extends React.Component{
    render(): React.ReactNode {
        return (
            <Tab.Navigator
                initialRouteName='Home'  
                tabBarPosition='bottom'
                screenOptions={({route}) => ({
                    tabBarLabelStyle: { fontSize: 10 },
                    tabBarStyle: { backgroundColor: '#fff',height:55 },
                    tabBarIndicatorStyle:{ backgroundColor:'#fff' },
                    tabBarPressColor:"#fff",
                })}
              >
                {Tabs.map((item,index) => (
                    <Tab.Screen key={index} name={item.name} component={item.component} options={item.options} />
                ))}
            </Tab.Navigator>
        )
    }
}