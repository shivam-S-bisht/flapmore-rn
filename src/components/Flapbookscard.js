import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Flapbookscard extends React.Component{

    render() {
        const { product_name , author, duration, background} = this.props.flapcard;
        console.log(this.props)

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => this.props.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars'})}
                    // onPress={() => this.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars'})}
                >
                    <View style={[styles.firstviewable, {backgroundColor: background}]}>
                        <Image source={require("../../assets/flapbookpic.png")} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    </View>
                    
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 3}}>{product_name.length <= 17 ? product_name:`${product_name.slice(0, 17)}...`}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 3}}>{author}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15}}>Total Read {14}: Min</Text>
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