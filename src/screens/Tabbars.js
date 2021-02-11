import React from "react";
import  {View, Text, TouchableOpacity, BackHandler} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Library from './Library';
import Explore from './Explore';

import Test from './Test'


export default class Tabbars extends React.Component {

    state = {
      visible: 0,
      playertype: 's',
      content: null
    }

    Tab = createMaterialBottomTabNavigator()


    componentDidMount() {

      this._unsubscribe = this.props.navigation.addListener('focus', () => {


        if (this.props.route.params != undefined){

          if (this.props.route.params.from == 'Bookdescription') {
            // console.log('Play')
            // this.sound = this.props.route.params.soundobj
            // this.sound.play()

            // this.props.navigation.push(this.props.route.params.to, {from: 'Tabbars', soundobj: this.sound, isplay: false})
            this.setState({content: this.setState({content: <this.Smallplayer />})
          }
          
          if ("soundobj" in this.props.route.params){
            
            this.setState({visible: 1})
          }

          else
            console.log('there')
            this.setState({visible: 0})
        }
        


        
        

      // do something
      });
    }



    Smallplayer () {
      return <View><Text>Hello</Text></View>
    }










  play () {
      this.setState({isplay: 1})
      this.sound.play()
  }


  pause () {
      this.setState({isplay: 0})
      this.sound.pause()
  }


  getcurrenttime (val) {

    var currvalue = val+1;

    
        
        var min = Math.floor(currvalue/60);
        var sec = Math.floor(currvalue%60);

        if (`${min}`.length == 1) {
            min = `0${min}`
        }

        if (`${sec}`.length == 1) {
            sec = `0${sec}`
        }
        console.log(this.state.currvalue)
        this.setState({currenttime: `${min}:${sec}`, currvalue, disable: false})
}


  seekbook (val) {
    this.setState({currvalue: val})

    this.pause()
    this.sound.setCurrentTime(val)
    this.getcurrenttime(val)
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
                        this.setState({content: <this.Smallplayer />})
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










    showplayer () {
      return (
        <View style={{position: 'absolute', bottom: 0, visible: this.state.visible}}>

            <TouchableOpacity
              onPress={()=> {
                if (this.state.playertype == 's') {
                  this.setState({playertype: 'l', content: <this.Musicplayer />})
                }
              }}
            >
              <Text>{this.state.content}</Text>
            </TouchableOpacity>
        </View>
      )
    }












    componentWillUnmount () {
      console.log('unmount')
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
              {this.showplayer()}
              
          </View>

        )
    }
}