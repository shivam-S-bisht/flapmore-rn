import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Slider from '@react-native-community/slider';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';  //play, pause

import bookdescription from '../infos/bookdescription';

export default class Musicplayer extends React.Component{


    state={
        isplay: 1
    }

    playbook () {
        try{
            console.log('hello')

            SoundPlayer.playUrl(bookdescription.playbookuri)
            console.log('hello')
        } catch (e) {
            console.log(`error : ${e}`)
        }
    }


    pausebook () {
        try {
            SoundPlayer.pause()
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
    }

    resumebook () {
        try {
            SoundPlayer.resume()
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
    }

    async getinfo () {

        try {
            const info = await SoundPlayer.getInfo()
            console.log(info)
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
        
    }


    render () {
        return (
            <SafeAreaView
                style={styles.topviewable}
            >
                {/* <Text>Music player</Text>

                <TouchableOpacity
                    onPress={this.playbook}
                >
                    <Text>Play</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.pausebook}
                >
                    <Text>Pause</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.resumebook}
                >
                    <Text>Resume</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.getinfo}
                >
                    <Text>Info</Text>
                </TouchableOpacity> */}
                
                <View
                    style={styles.firstviewable}
                >
                    <View
                        style={{
                            position: 'absolute',    
                        }}
                    >
                        <TouchableOpacity>
                            <Ionicon name='chevron-down' size={30} color='#fff' />
                        </TouchableOpacity>
                    </View>   
                    
                    
                        <Text
                            style={{
                                fontSize: 20, 
                                fontWeight: 'bold', 
                                color: '#fff',
                                alignSelf: 'center'
                            }}
                        >Audio Book</Text>
                    
                </View>

                <View
                    style={styles.secondviewable}
                >
                    <Image 
                        source={bookdescription.image}
                    />
                </View>

                <View
                    style={styles.thirdviewable}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}
                    >Ch 1 of 12 {bookdescription.title}</Text>
                    <Text
                        style={{
                            color: '#3D6DFF',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingTop: 10
                        }}
                    >{bookdescription.author}</Text>
                </View>
                
                <View
                    style={styles.fourthviewable}
                >
                    <TouchableOpacity>
                        <Ionicon name='play-skip-back-outline' size={30} color='#72889D' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 30 
                        }}
                    >   
                        <Anticon name={this.state.isplay? 'pausecircle': 'play'} size={50} color='#3D6DFF' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicon name='play-skip-forward-outline' size={30} color='#72889D' />
                    </TouchableOpacity>
                </View>
                <View
                    style={
                        styles.fifthviewable
                    }
                >
                    <Slider 
                        minimumTrackTintColor="#3D6DFF"
                        thumbTintColor='#fff'
                        maximumTrackTintColor='#72889D'
                        // backgroundColor='#35355E'
                        // color='#35355E'
                        trackImage='#35355E'

                    />
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5
                        }}
                    >
                        <Text
                            style={{
                                color: '#3D6DFF',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >00:00</Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >50:00</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create ({
    topviewable: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#151522'
    },

    firstviewable: {
        marginBottom: 20
    },

    secondviewable: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    thirdviewable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },

    fourthviewable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    fifthviewable: {
        marginVertical: 20
    }
})