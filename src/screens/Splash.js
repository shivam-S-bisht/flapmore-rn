import React from 'react';
import {Text, View, Image, Animated} from 'react-native';

export default class Splash extends React.Component{

    constructor() {
        super();
        this.state={
            animatedValue: new Animated.Value(0)
        }
    }

    navigate (val) {
        return new Promise(res=> {
            setTimeout(()=> {
                res(val)
            }, 1000)
        })
    }

    componentDidMount() {

        const probj = new Promise(res=> {
            setTimeout(()=>{
                res('found');
            }, 2000)
        })

        probj.then((res) => {
            Animated.timing(this.state.animatedValue, {
                toValue: 210,
                duration: 1000,
                useNativeDriver: false
            }).start();

            return this.navigate(res)

        }).then((res)=> {
            // if (res=="found"){
            //     this.props.navigation.replace('Tabbars')
            // } else {
            //     this.props.navigation.replace('Onboarding')
            // }
            this.props.navigation.replace('Onboarding')

        })
    }


    

   

    


    render () {
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
                <Image source={require('../../assets/splash-icon.jpg')} style={{marginBottom:5}} />
                <Image source={require('../../assets/home-iconname.png')} style={{marginBottom:5}}/>
                <Text style={{color:'#696C7B'}}>Flap more for smart contents</Text>

                <View style={{backgroundColor:'#E3E3E5', width:210, height:6, marginTop:10, borderRadius: 10}}>
                    <Animated.View style={{backgroundColor:'#3D6DFF', height:6, width: this.state.animatedValue, borderRadius: 10}}>
                        
                    </Animated.View>
                </View>
            </View>
        );
    }
}