import React from 'react';
import {Text, View, Image, Animated} from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component{

    constructor() {
        super();
        this.state={
            animatedValue: new Animated.Value(0)
        }
    }

    
    tabbarfunc () {
        this.gettoken()

    }

    async createnewaccountfunc () {
        axios.post('/signup', {
            emailMobile: this.props.route.params.emailorphone,
            password: this.props.route.params.password
        }).then((res)=> {
            if (res.status == 200) {
                console.log(res.data)
            }
        })
        // this.props.navigation.replace(this.props.route.params.to)
    }


    componentDidMount() {
        // console.log(this.props.route.params)
        this.animatedpromise()
        
    }


    animatedpromise () {
        const animatedpromise = new Promise (async res=> {
            Animated.timing(this.state.animatedValue, {
                toValue: 210,
                duration: 1000,
                useNativeDriver: false
            }).start();

            await this.timer()
            res()
        })

        animatedpromise.then(() => {

            try {
                switch (this.props.route.params.from) {
                    case 'Tabbars': this.tabbarfunc(); break;
                    case 'Createnewaccount': this.createnewaccountfunc(); break;
                    // case 'Tabbars':  break;
                    default: this.props.navigation.replace('Tabbars')
                }
            } catch {
                this.props.navigation.navigate('Onboarding')
            }
                
            
            
        })
    }


    timer () {
        return  new Promise(res=> {
            setTimeout(()=> {
                res()
            }, 1000)
        })
    }



    // async navigate () {

    //     await axios.post('/login', {

    //         emailMobile: 9315254391,
    //         password: 'test'

    //     }).then(() => {

    //         this.props.navigation.replace('Tabbars')
    //     }).catch(() => {

    //         this.props.navigation.replace('Onboarding')
    //     })
    // }
    

   
    async gettoken () {
      
        const token = await AsyncStorage.getItem('@token')
        
        if (token != null) {
            this.props.navigation.replace(this.props.route.params.to)

        } else {
            this.props.navigation.replace('LoginSignupchoose')

        }
            
    }


    async puttoken (val) {
        
        try {
            await AsyncStorage.setItem('@token', val)
        } catch (e) {
            console.log(e)
        }
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