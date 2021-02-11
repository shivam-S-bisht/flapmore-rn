import React from "react";
import  {View, Text, TouchableOpacity, BackHandler} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Library from './Library';
import Explore from './Explore';

import Musicplayer from './Musicplayer';


export default class Tabbars extends React.Component {

    state = {
      visible: 0
    }

    Tab = createMaterialBottomTabNavigator()


    componentDidMount() {

      this._unsubscribe = this.props.navigation.addListener('focus', () => {


        if (this.props.route.params != undefined){

          if (this.props.route.params.from == 'Bookdescription') {
            this.sound = this.props.route.params.soundobj
            this.sound.play()

            this.props.navigation.push(this.props.route.params.to, {from: 'Tabbars', soundobj: this.sound})
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


    showplayer () {
      return (
        <View style={{position: 'absolute', bottom: 60, visible: this.state.visible}}>

            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Musicplayer', {from: 'minimize', soundobj, timeelapsed, totaltime})}
            >
              <Text>Open Music</Text>
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
              {this.state.visible?this.showplayer():null}
              
          </View>

        )
    }
}