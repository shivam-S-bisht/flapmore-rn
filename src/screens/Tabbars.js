import React from "react";
import  {View, Text, TouchableOpacity} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Library from './Library';
import Explore from './Explore';

import Musicplayer from './Musicplayer';


export default class Tabbars extends React.Component {

    Tab = createMaterialBottomTabNavigator()


    componentDidMount() {
      this._unsubscribe = navigation.addListener('focus', () => {
      console.log('mount')
      // do something
      });
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
                      component={Home}  
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
              <View style={{position: 'absolute', bottom: 60}}>

                  <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Musicplayer')}
                  >
                    <Text>Open Music</Text>
                  </TouchableOpacity>
              </View>
          </View>

        )
    }
}