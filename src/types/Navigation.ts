import { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MaterialTopTabNavigationOptions,MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import React from 'react';



//导出startUp页面的导航器Props
export type startUpNavigationProps = NativeStackScreenProps<RootStackParamsList, 'StartUp'>;
//导出login页面的导航器Props
export type LoginNavigationProps = NativeStackScreenProps<RootStackParamsList, 'Login'>;
//导出选项卡导航器Props
export type tabNavigationProps = MaterialTopTabScreenProps<TabParamList>;
//到处Home页面的导航器Props
export type HomeNavigationProps = CompositeScreenProps<NativeStackScreenProps<RootStackParamsList>,MaterialTopTabScreenProps<TabParamList>>

//导出选项卡数据的类型
export type SetUpTabs = {
    name:keyof TabParamList;
    component:React.ComponentClass;
    options:MaterialTopTabNavigationOptions,
}