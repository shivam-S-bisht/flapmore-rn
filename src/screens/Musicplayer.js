import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Slider from '@react-native-community/slider';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';  //play, pause

import bookdescription from '../infos/bookdescription';

export default class Musicplayer extends React.Component{


    state={
        isplay: 1,

        currenttime: '--:--',
        duration: '--:--',

        maxvalue: 0,
        currvalue: 0.1
    }


    componentDidMount () {
        SoundPlayer.onFinishedLoading(() => {
            this.timer = setInterval(()=>this.getcurrenttime(), 500)
        });
        this.playbook()
    }

    componentWillUnmount () {
        this.timer && clearInterval(this.timer);
    }

    async playbook () {
        try{
            SoundPlayer.playUrl(bookdescription.playbookuri)

            const info = await SoundPlayer.getInfo()

            var duration = info['duration'];
            var min = Math.floor(duration/60);
            var sec = Math.floor(duration%60);

            if (`${min}`.length == 1) {
                min = `0${min}`
            }

            if (`${sec}`.length == 1) {
                sec = `0${sec}`
            }

            this.setState({duration: `${min}:${sec}`, maxvalue: duration})

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

    async getcurrenttime () {

        try {
            const info = await SoundPlayer.getInfo()

            var currenttime = info['currentTime']
            var min = Math.floor(currenttime/60);
            var sec = Math.floor(currenttime%60);

            if (`${min}`.length == 1) {
                min = `0${min}`
            }

            if (`${sec}`.length == 1) {
                sec = `0${sec}`
            }

            this.setState({currenttime: `${min}:${sec}`, currvalue: currenttime})

        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
        
    }


    seekbook (val) {
        try {
            SoundPlayer.seek(val);
            this.getcurrenttime();
            // if (this.state.currvalue == this.state.maxvalue) {
            this.setState({isplay: 0})
            this.pausebook()
            // }

        } catch (e) {
            console.log(`ERROR ${e}`)
        }
    }

    render () {
        return (
            <SafeAreaView
                style={styles.topviewable}
            >
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

                        onPress={()=>{
                            const isplay = this.state.isplay;
                            if (isplay) {
                                this.setState({isplay: 0})
                                this.pausebook()
                            } else {
                                this.setState({isplay: 1})
                                this.resumebook()
                            }

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
                        minimumValue={0}
                        maximumValue={this.state.maxvalue}
                        minimumTrackTintColor="#3D6DFF"
                        thumbTintColor='#fff'
                        maximumTrackTintColor='#72889D'
                        trackImage='#35355E'
                        value={this.state.currvalue}
                        onValueChange={(val)=> this.seekbook(val)}
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
                        >{this.state.currenttime}</Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >{this.state.duration}</Text>
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