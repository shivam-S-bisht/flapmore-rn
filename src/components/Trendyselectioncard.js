import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Trendyselectioncard extends React.Component{

    render() {

        const {image, title , author, totalreadtime} = this.props.trendycard;

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => this.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars'})}
                >
                    <Image source={image} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 10}}>{title}</Text>
                        <Text style={{color: '#DCFFA8', fontSize: 15, marginBottom: 10}}>{author}</Text>
                        <Text style={{color: '#FFF', fontSize: 15}}>Total Read {totalreadtime}: Min</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    toptouchable: {
        flex: 1,
        backgroundColor: '#463229',
        marginRight: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },

    contentviewable: {
        padding: 10,
        paddingTop: 20
    }
})