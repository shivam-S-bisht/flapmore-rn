import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View, Image, TouchableOpacity, Touchable} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import selecttags from '../infos/selecttags'

import Onetag from '../components/Onetag';


export default class Selecttags extends React.Component{

 
    render () {
        return (
            <SafeAreaView style={styles.topviewable}>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.goBack()}
                        style={{position: 'absolute', zIndex: 100, top: 20}}
                    >
                        <Ionicon name='chevron-back-outline' size={40} color='black' />
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/intrests.png')} />
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 10}}>Select your intrest</Text>
                    </View>
                    <View>
                        <FlatList
                            numColumns={2}
                            keyExtractor={item => item.id}
                            data={selecttags.tags}
                            renderItem={({item}) => <Onetag tagdesc={item} props={this.props} />}
                        />
                    </View>
                    <View style={{marginVertical: 20}}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.reset({index: 0, routes: [{name: 'Tabbars'}]})}
                            style={styles.touchable}
                        >
                            <Text style={{textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 15, letterSpacing: 1, color: '#fff'}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                         
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    topviewable: {
        paddingHorizontal: 25,
        flex: 1
    },

    touchable: {
        // paddingVertical: 10,
        backgroundColor:'#3D6DFF', 
        paddingHorizontal:'26%', 
        paddingVertical:20, 
        borderRadius:5
        // flex: 1
    }
})