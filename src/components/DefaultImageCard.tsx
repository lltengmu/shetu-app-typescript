import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import Iconicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/DefaultCard';

type props = {
    imgHttp: string,
    title:string,
    content:string,
    downloads:number,
    isSquare:boolean,
}

export default (props: props) => {
    return (
        <View style={styles.container}>
            <Image style={[{ height: props.isSquare ? 160 : 210 }, styles.image]} source={{ uri: props.imgHttp }} />
            <Text style={styles.title} >{props.title}</Text>
            <View style={styles.contentContainner}>
                <Text style={styles.content}>{props.content}</Text>
                <View style={styles.downloadcontainer}>
                    <Iconicons name='download-outline' size={15} color="rgba(0,0,0,.5)" />
                    <Text style={styles.downloads}>{props.downloads}</Text>
                </View>
            </View>
        </View>
    )
}