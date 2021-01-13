import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Flapbookscard extends React.Component{

    render() {

        const {image, title , author, totalreadtime, background} = this.props.flapcard;

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                >
                    <View style={[styles.firstviewable, {backgroundColor: background}]}>
                        <Image source={image} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    </View>
                    
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 3}}>{title}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 3}}>{author}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15}}>Total Read {totalreadtime}: Min</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    toptouchable: {
        flex: 1,
        marginRight: 15,
        borderRadius: 5,
    },

    firstviewable: {
        borderRadius: 5,

        paddingVertical: 15,
        paddingHorizontal: 40,
        marginBottom: 10
        
    }

})