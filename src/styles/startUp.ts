import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    containner: {
        position: "relative",
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center"
    },
    bgImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity:1,
        zIndex:-1
    },
    logo: {
        position: "absolute",
        top:'35%',
        width: 50,
        height: 50,
    },
    textWrapper: {
        color: "white",
        fontSize: 18
    },
    iconView: {
        position: "absolute",
        top:"55%",
        width:50,
        height:50,
        borderRadius: 25,
        backgroundColor: "rgb(232,52,52)",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1
    }
})
export default styles