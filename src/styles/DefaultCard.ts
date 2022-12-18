import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        marginBottom:30,
        width:"100%"
    },
    image:{
        marginBottom:20,
        width:"100%",
        borderRadius:8
    },
    title:{
        fontSize:16,
        color:"black",
        marginBottom:6,
    },
    contentContainner:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
    },
    content:{
        width: "70%",
        fontSize:14,
        color:"gray",
        opacity:0.5,
    },
    downloadcontainer:{
        width: "30%",
        flexDirection: "row",
        alignItems: "center"
    },
    downloads:{
        paddingTop: 2,
        fontSize: 12,
    }
})

export default styles;