import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {Image} from 'react-native';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';



// tab navigation screens
import Tabbars from './src/screens/Tabbars';


// // stack navigation screens
import Splash from './src/screens/Splash';
import Onboarding from "./src/screens/Onboarding";
import LoginSignupchoose from './src/screens/Loginsignupchoose';
import Createnewaccount from "./src/screens/Createnewaccount";
import Login from './src/screens/Login';
import Loginviaotp from './src/screens/Loginviaotp';
import Enterotp from "./src/screens/Enterotp";
import Pdfview from './src/screens/Pdfview';
import Bookdescription from './src/screens/Bookdescription'
import Selecttags from './src/screens/Selecttags';
import Test from './src/screens/Test';
import Forgotpassword from './src/screens/Forgotpassword';
import TagScreen from './src/screens/Tagscreen';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import Musicplayer from './src/screens/Musicplayer';


import MusicTest from './src/screens/musictest'
import Navigate from './src/screens/navigate'

// import { Text } from 'react-native';


export default class App extends React.Component{


  constructor(props) {
    super(props)
  }


    Stack = createStackNavigator()

    
    render() {
      return (
        <NavigationContainer>
                <this.Stack.Navigator screenOptions={{headerShown: false}}>
                    
                    {/* <this.Stack.Screen name='Splash' component={Splash} />
                    <this.Stack.Screen name='Onboarding' component={Onboarding} />
                    <this.Stack.Screen name='Tabbars' component={Tabbars} />

                    <this.Stack.Screen name='LoginSignupchoose' component={LoginSignupchoose} />
                    <this.Stack.Screen name='Createnewaccount' component={Createnewaccount} />
                    <this.Stack.Screen name='Login' component={Login} />
                    <this.Stack.Screen name='Loginviaotp' component={Loginviaotp} />
                    <this.Stack.Screen name='Enterotp' component={Enterotp} />
                    <this.Stack.Screen name='Bookdescription' component={Bookdescription} />
                    <this.Stack.Screen name='Pdfview' component={Pdfview} />
                    <this.Stack.Screen name='Selecttags' component={Selecttags} /> */}
                    <this.Stack.Screen name='Test' component={Test} />
                    {/* <this.Stack.Screen name='Forgotpassword' component={Forgotpassword} /> */}
                    {/* <this.Stack.Screen name='Tagscreen' component={TagScreen} /> */}
                    {/* <this.Stack.Screen name='Profile' component={Profile} /> */}
                    {/* <this.Stack.Screen name='Settings' component={Settings} /> */}
                    {/* <this.Stack.Screen name='Musicplayer' component={Musicplayer} /> */}
                    {/* <this.Stack.Screen name='Navigate' component={Navigate} />
                    <this.Stack.Screen name='MusicTest' component={MusicTest} /> */}
                </this.Stack.Navigator>                   
            </NavigationContainer>
        );  
    }
}
