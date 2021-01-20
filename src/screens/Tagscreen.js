import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView, DrawerLayoutAndroidComponent} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Anticon from 'react-native-vector-icons/AntDesign';
import Feathericon from 'react-native-vector-icons/Feather';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabflapbookscard from "../components/Tabflapbookscard";
import tabflapbooks from '../infos/tabflapbooks';


export default class Tagscreen extends React.Component{
    render () {
        return (
            <SafeAreaView style={styles.topviewable}>
                <ScrollView style={styles.sixthviewable}>

                <View style={styles.firstviewable}>
                    <TouchableOpacity>
                        <Ionicon name='chevron-back-outline' size={30} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicon name='search' size={27} color='#fff' />
                    </TouchableOpacity>
                </View>

                <View style={styles.secondviewable}>
                    <Image source={require('../../assets/tagscreenbg.png')} style={{width: 'auto'}} />
                </View>

                <View style={{position: 'absolute', width: Dimensions.get('window').width, top: 150, overflow: 'hidden', zIndex: 200}}>
                    <View style={styles.thirdviewable}>
                        <Text style={{fontWeight: 'bold', fontSize: 25}}>Psycology</Text>
                        <Text style={{fontSize: 15}}>Topics based on Human Psycology</Text>
                    </View>
                    <View style={styles.fourthviewable}></View>
                </View>

                    <View style={styles.fifthviewable}>
                            <TouchableOpacity>
                                <View style={styles.touchableviewable}>
                                    <Text style={styles.touchabletext}>Sort</Text>
                                    <Anticon name="down" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.touchableviewable}>
                                    <Maticon name="theme-light-dark" size={24} color="black" />
                                    <Text style={styles.touchabletext}>Dark Mode</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.touchableviewable}>
                                    <Feathericon name="filter" size={24} color="black" />
                                    <Text style={styles.touchabletext}>Filters</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

                    <FlatList
                        // style={{flex: 1}}
                        keyExtractor={item=>item.id}
                        data={tabflapbooks}
                        renderItem={({item}) => <Tabflapbookscard explorecard={item} />}
                        // showsHorizontalScrollIndicator={false}
                    />
                    </ScrollView>

                    
                        
                
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    topviewable: {
        backgroundColor: '#E4E9F2'
    },

    firstviewable: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        position: 'absolute', 
        zIndex: 100, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: Dimensions.get('window').width
    },

    thirdviewable: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        elevation: 10
        
    },

    fourthviewable: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 25,
        marginHorizontal: 50,
        bottom: 30,
        elevation: 9.9
    },

    fifthviewable: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        zIndex: 300,
        marginTop: 90
    },

    touchableviewable: {
        // flex: 1,
        flexDirection: 'row'
    },  

    touchabletext: {
        fontSize: 15,
        marginHorizontal: 5,
    },

    sixthviewable: {
        // flex: 1
    }

})