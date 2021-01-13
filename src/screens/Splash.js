import React from 'react';
import {Text, View, Image, Animated} from 'react-native';
import { Easing } from 'react-native-reanimated';

export default class Splash extends React.Component{

    constructor() {
        super();
        this.state={
            animatedValue: new Animated.Value(0)
        }
    }


    async componentDidMount() {

        Animated.timing(this.state.animatedValue, {
            toValue: 210,
            timing: 4000, 
            easing: Easing.linear
        }).start()

        const data = await this.navigateToHome();
        if (data !== null) {
        this.props.navigation.navigate('Home');
        }

    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(4000).then(() => this.props.navigation.replace('Home'))
        };


    render () {
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
                <Image source={require('../../assets/splash-icon.jpg')} style={{marginBottom:5}} />
                <Image source={require('../../assets/splash-iconname.png')} style={{marginBottom:5}}/>
                <Text style={{color:'#696C7B'}}>Flap more for smart contents</Text>

                <View style={{backgroundColor:'#E3E3E5', width:210, height:6, marginTop:10}}>
                    <Animated.View style={{backgroundColor:'#3D6DFF', height:6, width: this.state.animatedValue}}>
                        
                    </Animated.View>
                </View>
            </View>
        );
    }
}