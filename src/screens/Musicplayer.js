import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, BackHandler} from 'react-native';
import SoundPlayer from 'react-native-sound';
import Slider from '@react-native-community/slider';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';  //play, Pause

import bookdescription from '../infos/bookdescription';

export default class Musicplayer extends React.Component{

    constructor (props) {
        super(props)
        this._handleBackPress = this._handleBackPress.bind(this);
    }

    state={
        isplay: 1,
        disable: true, 
        currenttime: '--:--',
        duration: '--:--',

        maxvalue: 0,
        currvalue: 0.1
    }

    _handleBackPress () {
        // this.props.navigation.navigate(this.props.route.params.from)
        console.log(this.props)
        
    }


    async componentDidMount () {
        // console.log(this.props)
        // this._isMounted = true;
        BackHandler.addEventListener("hardwareBackPress", ()=> {
            this.props.navigation.navigate(this.props.route.params.from)
            return true
        }); 

        this.sound = new SoundPlayer(bookdescription.playbookuri, null, (error) => {
            if (error) {
              console.log(error)
            }
            // play when loaded
            this.sound.play();
          });

        
        this.timer = setInterval(()=>this.getcurrenttime(), 100)
       
        this.initiatestate()

    }


    async componentWillUnmount () {
        BackHandler.removeEventListener("hardwareBackPress", ()=>{return false});
        // this.sound.release()
        clearInterval(this.timer)
    }


    play () {
        this.setState({isplay: 1})
        this.sound.play()
    }


    pause () {
        this.setState({isplay: 0})
        this.sound.pause()
    }


    getcurrenttime () {
        this.sound.getCurrentTime((currenttime, _) => {
            
            var min = Math.floor(currenttime/60);
            var sec = Math.floor(currenttime%60);

            if (`${min}`.length == 1) {
                min = `0${min}`
            }

            if (`${sec}`.length == 1) {
                sec = `0${sec}`
            }

            this.setState({currenttime: `${min}:${sec}`, currvalue: currenttime, disable: false})
        })
    }


    seekbook (val) {
        this.setState({currvalue: val})

        this.pause()
        this.sound.setCurrentTime(val)
        this.getcurrenttime()
    }


    async initiatestate () {
     
        try{
           setTimeout(async ()=> {
                const duration = await this.sound.getDuration()

                console.log(duration)
                var min = Math.floor(duration/60);
                var sec = Math.floor(duration%60);

                if (`${min}`.length == 1) {
                    min = `0${min}`
                }

                if (`${sec}`.length == 1) {
                    sec = `0${sec}`
                }

                this.setState({duration: `${min}:${sec}`, maxvalue: duration})

            },2000)
            
        } catch (e) {
            console.log(`error : ${e}`)
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
                        <TouchableOpacity
                            onPress={()=> {
                                this.props.navigation.goBack()
                            }}
                        >
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
                        disabled={this.state.disable}
                        style={{
                            borderRadius: 30 
                        }}

                        onPress={()=>{

                            const isplay = this.state.isplay;
                            if (isplay) {
                                this.setState({isplay: 0})
                                this.pause()
                            } else {
                                this.setState({isplay: 1})
                                this.play()
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