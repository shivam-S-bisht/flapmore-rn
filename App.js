import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Image} from 'react-native';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';

// tab navigation screens
// import Home from './src/screens/Home';
// import Library from './src/screens/Library';
// import Explore from './src/screens/Explore';

// // stack navigation screens
// import Splash from './src/screens/Splash';
// import Onboarding from "./src/screens/Onboarding";
// import LoginSignupchoose from './src/screens/Loginsignupchoose';
// import Createnewaccount from "./src/screens/Createnewaccount";
// import Login from './src/screens/Login';
// import Loginviaotp from './src/screens/Loginviaotp';
// import Enterotp from "./src/screens/Enterotp";
import Pdfview from './src/screens/Pdfview';


export default class App extends React.Component{

    Stack = createStackNavigator()
    Tab = createMaterialBottomTabNavigator()

    render() {
        return (
            <NavigationContainer>
                <this.Stack.Navigator screenOptions={{headerShown: false}}>
                    {/* <this.Stack.Screen name='Splash' component={Splash} /> */}
                    {/* <this.Stack.Screen name='Onboarding' component={Onboarding} /> */}
                    {/* <this.Stack.Screen name='LoginSignupchoose' component={LoginSignupchoose} /> */}
                    {/* <this.Stack.Screen name='CreateNewAccount' component={Createnewaccount} /> */}
                    {/* <this.Stack.Screen name='Login' component={Login} /> */}
                    {/* <this.Stack.Screen name='Loginviaotp' component={Loginviaotp} /> */}
                    {/* <this.Stack.Screen name='Enterotp' component={Enterotp} /> */}
                    <this.Stack.Screen name='Pdfview' component={Pdfview} />
                </this.Stack.Navigator>

                {/* <this.Tab.Navigator
                    initialRouteName='Home'
                    activeColor='#fff'
                    inactiveColor='#7B84AC'
                    barStyle={{backgroundColor:'#151522'}}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, _ }) => {
                          let iconName;
              
                          if (route.name === 'Home') {
                            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                            return <Ionicons name={iconName} size={24} color={color} />;

                          } else if (route.name === 'Explore') {
                            iconName = focused ? 'ios-search' : 'ios-search-outline';
                            return <Ionicons name={iconName} size={24} color={color} />;

                          } else if (route.name === 'Library') {
                            iconName = focused ? 'bookmark' : 'bookmark-o';
                            return <FontAwesome name={iconName} size={24} color={color} />;

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
                    </this.Tab.Navigator>                     */}
            </NavigationContainer>
        );
    }
}
