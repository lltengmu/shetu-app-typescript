import React from 'react';
import { SetUpTabs } from '../types/Navigation';
import Home from '../page/Home';
import Discover from '../page/Discover';
import News from '../page/Comment'
import PersonalCenter from '../page/PersonalCenter';
import TabIcons from '../components/TabIcons';
import PerCenterIcon from '../components/PerCenterIcon';



export default [
    {
        name:'Home',
        component: Home,
        options:{
            title:"首页",
            tabBarShowLabel:false,
            tabBarIcon:({focused,color}) => {
                return <TabIcons TabName="home" isActive={!focused} source={!focused ? require('../../assets/TabIcons/Home/Inactive.png') : require('../../assets/TabIcons/Home/Active.png')} />
            },
        }
    },
    {
        name:'Discover',
        component: Discover,
        options:{
            title:"发现",
            tabBarShowLabel:false,
            tabBarIcon:({focused,color}) => {
                return <TabIcons TabName="Discover" source={!focused ? require('../../assets/TabIcons/Discover/Inactive.png') : require('../../assets/TabIcons/Discover/Active.png')} /> 
            }
        }
    },
    {
        name:'News',
        component: News,
        options:{
            title:"消息",
            tabBarShowLabel:false,
            tabBarIcon:({focused,color}) => {
                return <TabIcons TabName='News' source={!focused ? require('../../assets/TabIcons/News/Inactive.png') : require('../../assets/TabIcons/News/Active.png')} /> 
            }
        }
    },
    {
        name:'PersonalCenter',
        component: PersonalCenter,
        options:{
            title:"个人中心",
            tabBarShowLabel:false,
            tabBarIcon:({focused,color}) => {
                return <PerCenterIcon isActive={!focused} /> 
            }
        }
    },
] as SetUpTabs[]