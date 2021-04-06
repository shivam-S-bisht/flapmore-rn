import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, TouchableOpacity, LogBox } from 'react-native';
// import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 
import Anticon from 'react-native-vector-icons/AntDesign';
import Feathericon from 'react-native-vector-icons/Feather';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';



import Explorecategorycard from '../components/Explorecategorycard';
import Exploretabflapbookscard from "../components/Exploretabflapbookscard";

import explorecarddetails1 from '../infos/explorecard1';
import explorecarddetails2 from '../infos/explorecard2';
import exploretabflapbooks from '../infos/exploretabflapbooks';
LogBox.ignoreAllLogs();

export default class Explore extends React.Component {

    state = {
        searchtext: ''
    }

    onchangesearchtext(text) {
        this.setState({ searchtext: text })
    }

    render() {
        return (
            <SafeAreaView style={styles.topviewable}>
                <View style={styles.firstviewable}>
                    <Text style={styles.exploretitle}>Explore</Text>
                    <TextInput
                        value={this.state.searchtext}
                        onChangeText={text => this.onchangesearchtext(text)}
                        placeholder='Search Books'
                        style={styles.textinput}
                    />
                </View>

                <ScrollView>
                    <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>
                    <View style={styles.secondviewable}>
                        <Text style={styles.explorebycategorytitle}>Explore by Category</Text>
                        <FlatList
                            style={styles.explorecategoryflatlist}
                            keyExtractor={item => item.id}
                            data={explorecarddetails1}
                            horizontal={true}
                            renderItem={({ item }) => <Explorecategorycard explorecard={item} props={this.props.props} />}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlatList
                            // style={styles.explorecategoryflatlist}
                            keyExtractor={item => item.id}
                            data={explorecarddetails2}
                            horizontal={true}
                            renderItem={({ item }) => <Explorecategorycard explorecard={item} props={this.props.props} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

                    <View style={styles.thirdviewable}>
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
                    <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

                    <View style={styles.fourthviewable}>
                        {this.props.explorestate ?
                            <FlatList
                                keyExtractor={(_, index) => index.toString()}
                                data={this.props.props.route.params.data}
                                renderItem={({ item }) => <Exploretabflapbookscard explorecard={item} props={this.props.props} />}
                            // showsHorizontalScrollIndicator={false}
                            />
                            : null}
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        backgroundColor: '#fff'
    },

    firstviewable: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    exploretitle: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textinput: {
        // borderWidth: 1,
        marginTop: 10,
        marginBottom: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: '#E4E9F2'
    },

    secondviewable: {
        paddingVertical: 15,
        paddingLeft: 20
    },

    explorebycategorytitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },

    explorecategoryflatlist: {
        marginBottom: 10,

    },

    thirdviewable: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20

    },

    touchableviewable: {
        flex: 1,
        flexDirection: 'row'
    },

    touchabletext: {
        fontSize: 15,
        marginHorizontal: 5,
    },

    fourthviewable: {

    }
})