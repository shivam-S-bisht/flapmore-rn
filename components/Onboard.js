import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';

export default class OnBoard extends React.Component {

    

    render(){
        const {image, title, content} = this.props.board
        return(
            <View style={styles.topviewable}>
                <Image 
                    style={{marginBottom:5, marginTop:30}} 
                    source={image} 
                />
                <Text style={styles.titleviewable}>{title}</Text>
                <Text style={styles.contentviewable}>{content}</Text>
            </View>

            
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center', 
        width: Dimensions.get('window').width
    },
    
    titleviewable: {
        color:'#020155', 
        fontSize:28, 
        fontWeight:'bold', 
        marginTop:30
    },

    contentviewable: {
        color:'#7F7F97', 
        fontSize:18, 
        width:'70%', 
        textAlign:'center', 
        fontWeight:'400', 
        marginTop:20
    }
})