import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Trendyselectioncard extends React.Component{

    render() {

        const { product_name , author, duration} = this.props.trendycard;

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => this.props.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars'})}
                >

                    {/* hardcode */}
                    <Image source={require("../../assets/trendypic.jpg")} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    {/* hardcode */}

                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 10}}>{product_name.length <= 17 ? product_name:`${product_name.slice(0, 17)} ...`}</Text>
                        <Text style={{color: '#DCFFA8', fontSize: 15, marginBottom: 10}}>{author}</Text>

                        {/* hardcode */}
                        <Text style={{color: '#FFF', fontSize: 15}}>Total Read {14}: Min</Text>
                        {/* hardcode */}
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
        paddingTop: 20,
        flex: 1
    }
})