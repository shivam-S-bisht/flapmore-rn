import React from 'react';
import {View, Animated, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, SafeAreaView, ScrollView, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import Anticon from 'react-native-vector-icons/AntDesign'

import Ionicon from 'react-native-vector-icons/Ionicons'
import Anticon from 'react-native-vector-icons/AntDesign';
import Feathericon from 'react-native-vector-icons/Feather';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabflapbookscard from "../components/Tabflapbookscard";
import tabflapbooks from '../infos/tabflapbooks';

export default class Test extends React.Component {
    

    state = {
        animatedValue: new Animated.Value(-400),
        tovalue: 0,
        filter: 0,
        
        show: 'category',

        fiction:0,
        spiritual:0,
        motivational:0,
        history:0,
        technology:0,
        philosophy:0,
        biography:0,


    }


    onpressfilter (val) {

        // console.log(this.state.filter)
        Animated.timing(this.state.animatedValue, {
            toValue: val,
            duration: 100,
            useNativeDriver: false
        }).start()
    }




    selectcategory () {
        return (
            <View
                style={{
                    backgroundColor: '#EDF1FF',
                    flex: 1,
                    paddingLeft: 30,
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'category'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'category'?'#3D6DFF':'#EDF1FF'}]}
                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'category'? 'black' : '#75757C'}]}
                        >Category</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'language'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'language'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'language'? 'black' : '#75757C'}]}
                        >Language</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'mode'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'mode'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'mode'? 'black' : '#75757C'}]}
                        >Mode</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'customer'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'customer'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'customer'? 'black' : '#75757C'}]}
                        >Customer Rating</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'author'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'author'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'author'? 'black' : '#75757C'}]}
                        >Author</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'duration'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'duration'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={[styles.filtertext, {color: this.state.show == 'duration'? 'black' : '#75757C'}]}
                        >Duration</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    onselectcategory () {
        return (
            <View
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingVertical: 10

                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.fiction}
                        onValueChange={newval => this.setState({fiction: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Fiction</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.spiritual}
                        onValueChange={newval => this.setState({spiritual: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Spiritual</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.motivational}
                        onValueChange={newval => this.setState({motivational: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Motivational</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.history}
                        onValueChange={newval => this.setState({history: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >History</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.technology}
                        onValueChange={newval => this.setState({technology: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Technology</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.philosophy}
                        onValueChange={newval => this.setState({philosophy: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Philosophy</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.biography}
                        onValueChange={newval => this.setState({biography: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.filtercheckboxtext}
                    >Biography</Text>
                </View>
            </View>
        )
    }




    

    render () {
        return (
            <SafeAreaView style={styles.filtertopviewable}>





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
                        <TouchableOpacity
                            onPress={()=>{

                                this.onpressfilter(0)
                            }}
                        >
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



















                {/* <TouchableOpacity
                    style={{backgroundColor: 'blue'}}
                    onPress={()=>{

                        this.onpressfilter(0)
                    }}
                >
                    <Text>Filter</Text>
                </TouchableOpacity> */}
                
                <Animated.View style={[styles.filteranimatedviewable, {bottom: this.state.animatedValue}]}>
                    
                    <View style={styles.filterfirstviewable}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>Filter</Text>
                        <TouchableOpacity
                            onPress={()=> {
                                
                            this.onpressfilter(-400)

                            }}
                        >
                            <Anticon name='closecircle' size={25} color='#C8C8C8' />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderColor: '#DDE1F2',
                            borderTopWidth: 2,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row', 
                            justifyContent: 'space-between', 
                            paddingRight: 20,
                           
                        }}
                    >

                        {this.selectcategory()}
                        {this.onselectcategory()}

                        
                    </View>
                    <View
                        style={{
                            borderColor: '#DDE1F2',
                            borderTopWidth: 2,
                            marginBottom: 20,
                            
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 20,

                        }}
                    >
                        <TouchableOpacity 
                            style={styles.filterapplytouchable}
                        >
                            <Text style={styles.filterapplytext}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                    
                </Animated.View>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    filtertopviewable: {
        flex: 1,
        backgroundColor: 'red'
    },

    filteranimatedviewable: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        position: 'absolute',
        height: 400,
        paddingVertical: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    filterfirstviewable: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10
        
    },

    filterapplytouchable: {
        backgroundColor:'#3D6DFF', 
        paddingHorizontal:'26%', 
        paddingVertical:15, 
        borderRadius:5
    },

    filterapplytext: {
        color:'white', 
        fontWeight:'bold', 
        fontSize:20,
        textAlign: 'center'
    },

    filtercheckboxtext: {
        fontSize: 17,
        paddingLeft: 6
    },

    filtertext: {
        fontSize: 17,

    },

    filtertouchable: {
        paddingVertical: 8

    },

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