import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import Iconicon from 'react-native-vector-icons/Ionicons';

export default class Chaptersname extends React.Component{



    componentDidMount () {
        // console.log(this.props)
    }

    render() {

        // const {file_desc, file_type, file_order} = this.props.chinfo;

        return (
        <View style={styles.topviewable}>
            <TouchableOpacity
                style={styles.touchable}
            >
                <View style={{paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'center', paddingVertical: 5, borderRadius: 15, marginRight: 10}}>
                    <Text style={{color: '#4D4D6F', fontSize: 15}}>{this.props.chinfo["file_order"]}</Text>
                </View>
                
                <View style={{justifyContent: 'space-around', flex: 1, flexDirection: 'row', width: Dimensions.get('window').width/1.5, paddingHorizontal: 10}}>
                    <Text style={{color: '#4D4D6F', fontSize: 15}}>{file_desc}</Text>
                    <Iconicon name='chevron-forward' size={25} color='#909BA6' style={{alignSelf: 'center'}} />

                </View>

            </TouchableOpacity>
        </View>
        )
    }   
}

const styles=StyleSheet.create({
    topviewable: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    touchable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex: 1,
        backgroundColor: '#E1F0FF',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6
        // overflow: 'hidden'

    }
})