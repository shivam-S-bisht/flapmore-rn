import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Trendingflapbookscard extends React.Component{

    render() {

        const { product_name , author, duration, background} = this.props.trendingcard;

        // const {image, title , author, totalreadtime, background} = this.props.trendingcard;

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => this.props.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars'})}
                    // onPress={()=> this.props.props.navigation.push('Bookdescription')}
                >
                    <View style={{backgroundColor: background, paddingHorizontal: 30, margin: 10, borderRadius: 5, paddingVertical: 10}}>
                        <Image source={require("../../assets/flapbookpic.png")} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    </View>
                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10}}>{product_name.length <= 17 ? product_name:`${product_name.slice(0, 17)} ...`}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 10}}>{author}</Text>
                        <Text style={{color: '#1788AC', fontSize: 15}}>Total Read {14}: Min</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    toptouchable: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },

    contentviewable: {
        paddingVertical: 10,
        paddingRight: 10,
        paddingTop: 20
    }
})