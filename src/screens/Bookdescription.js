import React from 'react';
import {StyleSheet, LogBox, ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text, Touchable, StatusBar, Dimensions, FlatList} from 'react-native';
import SoundPlayer from 'react-native-sound';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontawesomeicon from 'react-native-vector-icons/FontAwesome';
import Anticon from 'react-native-vector-icons/AntDesign';
import Feathericon from 'react-native-vector-icons/Feather';
import Materialicon from 'react-native-vector-icons/MaterialCommunityIcons';

import bookdescription from '../infos/bookdescription';

import Chaptersname from '../components/Chaptersname';
import Similarbookscard from '../components/Similarbookscard';


LogBox.ignoreAllLogs();

export default class Bookdescription extends React.Component {

    state={
        bookmarked:0
    }


    componentDidMount () {
        this.sound = new SoundPlayer(bookdescription.playbookuri)
        this.sound.play()
    }


    render() {
        return (
            <SafeAreaView style={styles.topviewable}>
                <View style={styles.firstviewable}>
                        
                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Ionicon name='chevron-back-outline' size={30} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginHorizontal: 20}}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.bookmarked) {
                                        this.setState({bookmarked: 0})
                                    } else {
                                        this.setState({bookmarked: 1})
                                    }
                                }}
                            >
                                <Fontawesomeicon name={this.state.bookmarked?'bookmark':'bookmark-o'} size={25} color='#fff' />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Ionicon name='share-social-outline' size={27} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <View>

                
                    <ScrollView style={styles.secondviewable}>
                    <Image source={bookdescription.image} style={{flex: 1, width: Dimensions.get('window').width, height: 280}}/>
                    <View style={styles.thirdviewable}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#151522', paddingBottom: 5, letterSpacing: 0.5}}>{bookdescription.title}</Text>
                            <Text style={{fontSize: 18, color: '#0080FF', paddingBottom: 5, letterSpacing: 0.5}}>{bookdescription.author}</Text>
                            <Text style={{fontSize: 16, color: '#595966', paddingBottom: 5, letterSpacing: 0.5}}>{bookdescription.description}</Text>
                            <View style={{flexDirection: 'row', paddingBottom: 5}}>
                                <Text style={{fontSize: 17, color: '#1788AC', letterSpacing: 0.5}}>Total read: {bookdescription.totalreadtime} mins</Text>
                                <Text style={{fontSize: 17, color: '#595966', paddingLeft: 30, letterSpacing: 0.5}}>Chapter {bookdescription.chapter}</Text>
                            </View>
                        </View>
                        <View style={styles.fourthviewable}>
                            <TouchableOpacity
                                style={[styles.touchable, {borderColor: '#3D6DFF'}]}
                                onPress={()=> this.props.navigation.push('Splash', {
                                    from: 'Bookdescription', 
                                    to: 'Pdfview'
                                })}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    <Anticon name='book' size={29} color={'#3D6DFF'} />
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#3D6DFF', paddingLeft: 10, alignSelf: 'center'}}>Read Now</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.touchable, { borderColor: '#3D6DFF', backgroundColor: '#3D6DFF'}]}
                                onPress={()=> {
                                    
                                        this.props.navigation.replace('Splash', {
                                            from: 'Bookdescription',
                                            to: 'Musicplayer',
                                            soundobj: this.sound
                                        })
                                    }}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    <Feathericon name='headphones' color='#fff' size={29} />
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', paddingLeft: 10, alignSelf: 'center'}}>Listen Now</Text>
                                </View>
                            </TouchableOpacity>
                            
                            
                        </View>
                        <View style={styles.fifthviewable}>
                            <Materialicon name='account-group-outline' color='#151522' size={25} />
                            <Text style={{fontSize: 15, alignSelf: 'center', paddingHorizontal: 12, color: '#151522'}}>{bookdescription.popularity} people have read the book this month.</Text>
                        </View>
                        <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                        <View style={styles.sixthviewable}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>All Chapters</Text>
                            <Text style={{fontSize: 16, letterSpacing: 0.8}}>Total : {bookdescription.chapter} Chapters</Text>
                            <SafeAreaView style={{flex: 1, marginTop: 10}}>
                                <FlatList 
                                    keyExtractor={item=>item.chno}
                                    data={bookdescription.chapters}
                                    renderItem={({item})=> <Chaptersname chinfo={item} />}
                                />
                            </SafeAreaView>

                        </View>
                        <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                        <View style={styles.seventhviewable}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>All about the book</Text>
                            <Text style={{fontSize: 16, marginBottom: 20, color: '#4D5156', lineHeight: 20}}>{bookdescription.aboutbook}</Text>
                            
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>All about the author</Text>
                            <Text style={{fontSize: 16, marginBottom: 15, color: '#4D5156' , lineHeight: 20}}>{bookdescription.aboutauthor}</Text>
                        </View>
                        <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                        <View style={styles.eighthviewable}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Similar books to read</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={{marginRight: 20}}
                                    >
                                        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#0080FF'}}>View All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{fontSize: 17, color: '#4D5156', marginBottom: 10}}>You might enjoy these books.</Text>
                            <SafeAreaView>
                                <FlatList 
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    keyExtractor={item=>item.id}
                                    data={bookdescription.similarbooks}
                                    renderItem={({item})=> <Similarbookscard bookinfo={item} props={this.props}/>}
                                />
                            </SafeAreaView>
                        </View>
                        <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    topviewable: {
        // paddingTop: StatusBar.currentHeight,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    firstviewable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingVertical: 18,
        zIndex: 2,
        position: 'absolute'
        // backfaceVisibility: 'hidden',
        // opacity: 0.2
    },



    thirdviewable: {
        // position: 'absolute'
        paddingTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection:'column'
    },

    fourthviewable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    touchable: {
        borderRadius: 6, 
        paddingHorizontal: 15, 
        borderWidth: 2,
        paddingVertical: 8,
    },

    fifthviewable: {
        marginHorizontal: 20,
        marginVertical: 12,
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 2, 
        borderColor: '#DBCA94',
        borderRadius: 5,
        backgroundColor: '#FFECAD'
    },

    sixthviewable: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    seventhviewable: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    eighthviewable: {
        paddingVertical: 15, 
        paddingLeft: 20
    }
})