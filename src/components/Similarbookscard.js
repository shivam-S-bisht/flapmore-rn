import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Similarbookscard extends React.Component{

    render() {

        const {thumbnail_url, product_name , author, duration, background} = this.props.bookinfo;
        // console.log(this.props.bookinfo)

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => this.props.props.navigation.push('Bookdescription')}
                >
                    <View style={[styles.firstviewable, {backgroundColor: background}]}>
                        <Image source={{uri: thumbnail_url}} style={{borderRadius: 5, left:0, right:0, top:0, bottom: 0, position: 'absolute'}} />
                    </View>
                    
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 3}}>{product_name.length <= 10?product_name:product_name.slice(0, 10)} ...</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 3}}>{author}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15}}>Total Read {14}: Min</Text>
                </TouchableOpacity>
                {/* <Text>HEllo</Text> */}
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