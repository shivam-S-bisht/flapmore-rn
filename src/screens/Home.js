import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Trendyselectioncard from '../components/Trendyselectioncard';
import Flapbookscard from '../components/Flapbookscard'
import Explorecategorycard from '../components/Explorecategorycard';
import Trendingflapbookscard from '../components/Trendingflapbookscard';

import trendycarddetails from '../components/trendyselection';
import explorecarddetails1 from '../components/explorecard1';
import explorecarddetails2 from '../components/explorecard2';
import flapbookdetails from '../components/flapbooks';
import trendingflapbookdetails from '../components/trendingflapbooks';




export default class Home extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.topviewable}>
                <View style={{marginBottom: 10}}>
                    <Image source={require('../../assets/home-iconname.png')} style={{position:'absolute', top: 33, left: 20}} />

                    <View style={styles.firstviewable}>
                        <Ionicons name='notifications-outline' size={24} color='#1F4966' style={{paddingHorizontal:15}} />
                        <Ionicons name='settings-outline' size={24} color='#1F4966' />
                    </View>
                </View>
                <ScrollView>

                    <View style={styles.secondviewable}>
                        <Text style={styles.texttitle}>Free Books of the Day</Text>
                        <Text style={styles.secondtextcontent}>Best Trendy Selection</Text>
                        <FlatList 
                            style={styles.trendyselectionflatlist}
                            keyExtractor={item=>item.id}
                            data={trendycarddetails}
                            horizontal={true}
                            renderItem={({item}) => <Trendyselectioncard trendycard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />
                        
                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                    <View style={styles.thirdviewable}>
                        <Text style={[styles.texttitle, {marginBottom: 10}] }>Explore by Category</Text>
                        <FlatList 
                            style={styles.explorecategoryflatlist}
                            keyExtractor={item=>item.id}
                            data={explorecarddetails1}
                            horizontal={true}
                            renderItem={({item}) => <Explorecategorycard explorecard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlatList 
                            // style={styles.explorecategoryflatlist}
                            keyExtractor={item=>item.id}
                            data={explorecarddetails2}
                            horizontal={true}
                            renderItem={({item}) => <Explorecategorycard explorecard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                    <View style={[styles.fourthviewable]}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={styles.texttitle}>Free Books for you</Text>
                            <TouchableOpacity
                                style={{marginRight: 20}}
                            >
                                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#3D6DFF'}}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.secondtextcontent}>You might enjoy these books</Text>
                        <FlatList 
                            style={styles.trendyselectionflatlist}
                            keyExtractor={item=>item.id}
                            data={flapbookdetails}
                            horizontal={true}
                            renderItem={({item}) => <Flapbookscard flapcard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                    <View style={styles.fifthviewable}>
                        <Text style={[styles.texttitle, {color: '#fff'}]}>Trending Picks for you</Text>
                        <Text style={[styles.secondtextcontent, {color: '#fff', opacity: 0.3}]}>Select Trending Flapbooks</Text>
                        <FlatList 
                            style={styles.trendyselectionflatlist}
                            keyExtractor={item=>item.id}
                            data={trendingflapbookdetails}
                            horizontal={true}
                            renderItem={({item}) => <Trendingflapbookscard trendingcard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                    <View style={styles.sixthviewable}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={styles.texttitle}>Audio Books</Text>
                            <TouchableOpacity
                                style={{marginRight: 20}}
                            >
                                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#3D6DFF'}}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.secondtextcontent}>You might enjoy these books</Text>
                        <FlatList 
                            style={styles.trendyselectionflatlist}
                            keyExtractor={item=>item.id}
                            data={flapbookdetails}
                            horizontal={true}
                            renderItem={({item}) => <Flapbookscard flapcard={item} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                    <View style={styles.seventhviewable}>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create({
    topviewable:{
        flex:1, 
        backgroundColor: 'white',
        
    },

    firstviewable: {
        flexDirection:'row-reverse',
        paddingTop:30,
        // backgroundColor: 'red'
        // position: 'fixed'
    },

    secondviewable: {
        paddingVertical: 10,
        // backgroundColor: 'red',
        paddingLeft: 20,
    },

    texttitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    secondtextcontent: {
        color: '#4D5156',
        fontSize: 16,
        
    },

    trendyselectionflatlist: {
        marginTop: 15
    },

    thirdviewable: {
        paddingVertical: 15,
        paddingLeft: 20

    },

    explorecategoryflatlist: {
        marginBottom: 10
    },

    fourthviewable: {
        paddingVertical: 15,
        paddingLeft: 20,
    },

    fifthviewable: {
        paddingVertical: 15,
        paddingLeft: 20,
        backgroundColor: '#22263E'
    },

    sixthviewable: {
        paddingVertical: 15,
        paddingLeft: 20,
    },

    seventhviewable: {

    }
})