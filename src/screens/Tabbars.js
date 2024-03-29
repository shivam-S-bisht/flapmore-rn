import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Maticon from 'react-native-vector-icons/MaterialIcons';
import Anticon from 'react-native-vector-icons/AntDesign';  //play, Pause
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Library from './Library';
import Explore from './Explore';

import Test from './Test'

import bookdescription from '../infos/bookdescription';

// LogBox.ignoreAllLogs();
export default class Tabbars extends React.Component {

    constructor(props) {
        super(props)
        this.pause = this.pause.bind(this)
    }


    state = {
        visible: 0,
        playertype: 's',
        content: null,
        isplay: null,
        disable: true,
        currenttime: '--:--',
        duration: '--:--',

        maxvalue: 9999,
        currvalue: 0,

        explorestate: false,
        libstate: false,


    }

    Tab = createMaterialBottomTabNavigator()


    componentDidMount() {


        this._unsubscribe = this.props.navigation.addListener('focus', () => {

            // console.log("------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>")
            if (this.props.route.params != undefined) {

                if (this.props.route.params.from == 'Bookdescription' && this.state.isplay == null) {
                    console.log('Play')

                    this.sound = new Sound(this.props.route.params.playbookuri, null, (e) => {
                        if (e) {
                            console.log('error loading track:', e)
                        } else {

                            this.timer = setInterval(() => {
                                if (this.state.isplay || this.state.isplay == null)
                                    this.getcurrenttime(this.state.currvalue)

                                if (this.state.currvalue > this.state.maxvalue)
                                    this.setState({ currvalue: 0, isplay: 0, currenttime: "00:00" })
                                // console.log("oiwbfowibefweofiwe+++++++++++++++++++")

                            }, 1000)


                            this.initiatestate()
                            this.sound.play()
                            this.setState({ visible: 1 })
                        }
                    })


                }

            }

        });
    }


    componentWillUnmount () {
        this._unsubscribe();
    }

    play() {
        // this.setState({isplay: 1})
        this.sound.play()
    }


    pause() {
        // this.setState({isplay: 0})
        // console.log(this.state)
        try{
            this.sound.pause()

        } catch (e) {
            this.setState({ currvalue: 0, isplay: 0, currenttime: "00:00"})
        }
    }



    seekbook(val) {
        this.pause()
        this.sound.setCurrentTime(val)
        this.getcurrenttime(val)
    }



    getcurrenttime(val) {

        try {
            var currvalue = val + 1;

            var min = Math.floor(currvalue / 60);
            var sec = Math.floor(currvalue % 60);

            if (`${min}`.length == 1) {
                min = `0${min}`
            }

            if (`${sec}`.length == 1) {
                sec = `0${sec}`
            }
            // console.log(this.state.currvalue)
            this.setState({ currenttime: `${min}:${sec}`, currvalue, disable: false })

        } catch (e) {
            console.log("ERROR:++++",)
            this.pause()
            this.setState({ currvalue: 0, isplay: 0, currenttime: "00:00" })
        }
    }


    async initiatestate() {    // get and set duration and max value initially

        try {
            setTimeout(async () => {
                const duration = await this.sound.getDuration()

                // console.log(duration)
                var min = Math.floor(duration / 60);
                var sec = Math.floor(duration % 60);

                if (`${min}`.length == 1) {
                    min = `0${min}`
                }

                if (`${sec}`.length == 1) {
                    sec = `0${sec}`
                }

                this.setState({ duration: `${min}:${sec}`, maxvalue: duration })

            }, 2000)

        } catch (e) {
            console.log(`error : ${e}`)
            this.pause()
            this.setState({ currvalue: 0, isplay: 0, currenttime: "00:00" })
        }
    }





    Smallplayer() {
        return (
            <View
                style={{ backgroundColor: '#383854', paddingHorizontal: 10, height: 60, justifyContent: 'center' }}
            >
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ playertype: 'l' })

                    }}
                >



                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    >


                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image
                                source={bookdescription.image}
                                style={{ height: 50, width: 65, borderRadius: 5 }}
                            />
                            <View
                                style={{ paddingHorizontal: 15 }}
                            >
                                <Text style={{ color: '#FFF', fontSize: 18 }}>{this.props.route.params.title.length <= 13 ? this.props.route.params.title : `${this.props.route.params.title.slice(0, 13)}...`}</Text>
                                <Text style={{ color: '#7A7A97', fontSize: 15 }}>Now Playing...</Text>
                            </View>
                        </View>


                        <View
                            style={{ flexDirection: 'row' }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    const isplay = this.state.isplay;
                                    if (isplay || isplay == null) {
                                        this.setState({ isplay: 0 })
                                        this.pause()
                                    } else {
                                        this.setState({ isplay: 1 })
                                        this.play()
                                    }
                                }}

                                style={{ backgroundColor: '#3D6DFF', height: 40, borderRadius: 80, width: 40, alignItems: 'center', justifyContent: 'center', margin: 10 }}
                            >
                                <Maticon name={(this.state.isplay == null || this.state.isplay) ? 'pause' : 'play-arrow'} size={25} color='#fff' />
                            </TouchableOpacity>



                            <TouchableOpacity
                                // onPress={()=> {
                                //     const isplay = this.state.isplay;
                                //     if (isplay || isplay == null) {
                                //         this.setState({isplay: 0})
                                //         this.pause()
                                //     } else {
                                //         this.setState({isplay: 1})
                                //         this.play()
                                //     }
                                // }}

                                style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
                            >
                                <Maticon name='replay-10' size={35} color='#fff' />
                            </TouchableOpacity>

                        </View>



                    </View>

                </TouchableOpacity>

                {/* <TouchableOpacity
              onPress={()=> {
                this.setState({isplay: 0})
                this.pause()
              }}
          >
            <Text>Pause</Text>
          </TouchableOpacity> */}
            </View>
        )
    }




    Musicplayer() {
        return (
            <View
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
                            onPress={() => {
                                this.setState({ playertype: 's' })
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
                    >{this.props.route.params.title}</Text>
                    <Text
                        style={{
                            color: '#3D6DFF',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingTop: 10
                        }}
                    >{this.props.route.params.author}</Text>
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

                        onPress={() => {

                            const isplay = this.state.isplay;
                            if (isplay || isplay == null) {
                                this.setState({ isplay: 0 })
                                this.pause()
                            } else {
                                this.setState({ isplay: 1 })
                                this.play()
                            }

                        }}
                    >
                        <Anticon name={(this.state.isplay == null || this.state.isplay) ? 'pausecircle' : 'play'} size={50} color='#3D6DFF' />
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
                        onValueChange={(val) => {

                            // console.log(this.sound.getDuration())
                            this.setState({ currvalue: val, isplay: 0 })
                            this.seekbook(val)
                        }}
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
            </View>
        )
    }

    changelibstate(val) {
        this.setState({ libstate: val })
    }

    changeexplorestate(val) {
        this.setState({ explorestate: val })
    }





    render() {

        // this.state.tokenchecked? null: this.settokenvalid() 
        // console.log(this.props.route.params.tokenvalid)

        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>


                <this.Tab.Navigator

                    initialRouteName='Home'
                    activeColor='#fff'
                    inactiveColor='#7B84AC'
                    barStyle={{ backgroundColor: '#151522', height: 60 }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, _ }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                                return <Ionicon name={iconName} size={24} color={color} />;

                            } else if (route.name === 'Explore') {
                                iconName = focused ? 'ios-search' : 'ios-search-outline';
                                return <Ionicon name={iconName} size={24} color={color} />;

                            } else if (route.name === 'Library') {
                                iconName = focused ? 'bookmark' : 'bookmark-o';
                                return <FontAwesomeIcon name={iconName} size={24} color={color} />;

                            }
                        }
                    })}
                >
                    <this.Tab.Screen
                        name='Home'
                        children={() => <Home props={this.props} visible={this.state.visible} tokenvalid={this.props.route.params.tokenvalid} />}
                        listeners={{
                            tabPress: () => {
                                this.setState({ libstate: false, explorestate: false })
                            }
                        }}
                    />

                    <this.Tab.Screen
                        name='Explore'
                        children={() => <Explore props={this.props} explorestate={this.state.explorestate} changeexplorestate={this.changeexplorestate.bind(this)} tokenvalid={this.props.route.params.tokenvalid} />}
                        listeners={{
                            tabPress: () => {
                                this.setState({ libstate: false, explorestate: true })
                            }
                        }}
                    />

                    <this.Tab.Screen
                        name='Library'
                        children={() => <Library {...this.props} libstate={this.state.libstate} changelibstate={this.changelibstate.bind(this)} tokenvalid={this.props.route.params.tokenvalid} />}
                        // onPress={() => console.log("++++++++++++++++++++>>>>>>>>>>>>>>")}
                        listeners={{
                            tabPress: () => {
                                this.setState({ libstate: true, explorestate: false })
                            }
                        }}

                    />
                </this.Tab.Navigator>

                {this.state.visible ? <View style={{ position: 'absolute', bottom: this.state.playertype == 's' ? 60 : 0, left: 0, right: 0 }}>
                    {this.state.playertype == 's' ? this.Smallplayer() : this.Musicplayer()}
                </View> : null}



            </View>

        )
    }
}


const styles = StyleSheet.create({
    topviewable: {

        paddingVertical: 60,
        // position: 'absolute',
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