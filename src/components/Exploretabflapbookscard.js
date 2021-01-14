import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Exploretabflapbookscard extends React.Component{

    
    state={
        iconflag: 0

    }


    render() {

        const {image, title , author, totalreadtime, background} = this.props.explorecard;

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                >
                    <View style={{backgroundColor: background, paddingHorizontal: 30, margin: 10, borderRadius: 5, paddingVertical: 10}}>
                        <Image source={image} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                    </View>
                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10}}>{title}</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 10}}>{author}</Text>
                        <Text style={{color: '#1788AC', fontSize: 15}}>Total Read {totalreadtime}: Min</Text>
                    </View>
                    <View style={styles.bookmarkviewable}>
                        <TouchableOpacity
                            onPress={()=> {
                                switch(this.state.iconflag) {
                                    case 0: this.setState({iconflag: 1}); break;
                                    case 1: this.setState({iconflag: 0}); break;
                                }
                            }}
                        >
                            
                            {/* <Maticon name={this.state.iconflag?'bookmark':'bookmark-plus-outline'} size={35} color="black" />   */}
                            <Maticon name={this.state.iconflag?'bookmark':'bookmark-plus-outline'} size={35} color="black" />  
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
        backgroundColor: 'white',
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