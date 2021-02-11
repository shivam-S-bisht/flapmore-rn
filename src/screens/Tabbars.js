import React from "react";
import  {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';  //play, Pause
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Library from './Library';
import Explore from './Explore';

import Test from './Test'

import bookdescription from '../infos/bookdescription';


export default class Tabbars extends React.Component {

    constructor(props) {
      super(props)
      this.pause = this.pause.bind(this)
    }  
  
  
  state = {
      visible: 0,
      playertype: 's',
      content: null,
      isplay: 1,
      disable: true, 
      currenttime: '--:--',
      duration: '--:--',

      maxvalue: 9999,
      currvalue: 0,

      soundobj: null
      
    }

    Tab = createMaterialBottomTabNavigator()
    // sound = null

    componentDidMount() {

      this._unsubscribe = this.props.navigation.addListener('focus', () => {


        if (this.props.route.params != undefined){

          if (this.props.route.params.from == 'Bookdescription') {
            console.log('Play')

            this.sound = new Sound(this.props.route.params.playbookuri, null, (e) => {
            if (e) {
              console.log('error loading track:', e)
            } else {
                this.initiatestate()
                this.sound.play()
            }
          })

            
          }
          
        }
        
      });
    }



    play () {
        // this.setState({isplay: 1})
        this.sound.play()
    }


    pause () {
        // this.setState({isplay: 0})
        // console.log(this.state)
        this.sound.pause()
    }



    async initiatestate () {    // get and set duration and max value initially
        
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

    Smallplayer () {
      return (
        <View style={{position: 'absolute', bottom: 0, visible: this.state.visible}}>
          <TouchableOpacity
            onPress={()=> {
              this.setState({playertype: 'l'})

            }}
          >
            <Text>Music Player</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={()=> this.pause(this)}
          >
            <Text>Pause</Text>
          </TouchableOpacity>
        </View>
      )
    }






    Musicplayer () {
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
                            onPress={()=> {
                                this.setState({playertype: 's'})
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
            </View>
        )
    }





    render () {
        
        return (
          <View style={{flex: 1, backgroundColor: 'red'}}>
          

              <this.Tab.Navigator
                  
                  initialRouteName='Home'
                  activeColor='#fff'
                  inactiveColor='#7B84AC'
                  barStyle={{backgroundColor:'#151522', height: 60}}
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
                    },
                  })}
                  >
                  <this.Tab.Screen 
                      name='Home' 
                      children={()=> <Home props={this.props}  />}
                      />
                  <this.Tab.Screen 
                      name='Explore' 
                      component={Explore} 
                      />
                  <this.Tab.Screen 
                      name='Library' 
                      component={Library} 
                      />
              </this.Tab.Navigator>
              {this.state.playertype == 's'? this.Smallplayer(): this.Musicplayer()}
              
          </View>

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