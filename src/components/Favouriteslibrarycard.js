import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import Anticon from 'react-native-vector-icons/AntDesign';



export default class Favouriteslibrarycard extends React.Component{

    
    // state={
    //     iconflag: 0

    // }


    render() {

        const {thumbnail_url, product_name, author, duration, background} = this.props.favcard;
        // console.log("fwefwefwefpoi:", this.props.favcard)

        return(
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={styles.toptouchable}
                >
                    <View style={{backgroundColor: background, paddingHorizontal: 30, margin: 10, borderRadius: 5, paddingVertical: 10}}>
                        <Image source={require("../../assets/flapbookpic.png")} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    </View>
                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10}}>{product_name.length <=17 ? product_name : `${product_name.slice(0, 15)}...`}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 10}}>{author}</Text>

                        
                        <Text style={{color: '#1788AC', fontSize: 15}}>Total Read {14}: Min</Text>
                    </View>
                    <View style={styles.bookmarkviewable}>
                        <TouchableOpacity
                            
                        >
                            <Anticon name="delete" size={24} color="black" />  
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    toptouchable: {
        flex: 1,
        // backgroundColor: 'red',
        marginRight: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },

    contentviewable: {
        paddingVertical: 10,
        paddingRight: 10,
        paddingTop: 20
    },

    bookmarkviewable: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }
})