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

    

    componentDidMount() {
        this.animatedpromise() 
    }



    async splashfunc () {
        const {found, _} = await this.gettoken()
        if (found) {
            this.props.navigation.replace('Tabbars')
        } else {
            this.props.navigation.replace('Onboarding')
        }

    }



    async tabbarfunc () {
        const {_, to} = await this.gettoken()
        this.props.navigation.replace(to)

    }



    async createnewaccountfunc () {
        axios.post('/signup', {
            emailMobile: this.props.route.params.emailorphone,
            password: this.props.route.params.password
        }).then((res)=> {
            if (res.status == 200) {
                this.puttoken(res.data.token)
            }
        })
    }



    async loginfunc () {
        axios.post('/login', {
            emailMobile: this.props.route.params.emailorphone,
            password: this.props.route.params.password
        }).then((res)=> {
            if (res.status == 200) {
                this.puttoken(res.data.token)
                this.props.navigation.replace(this.props.route.params.to)
            }
        })
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
                    case 'Login': this.loginfunc(); break;
                    // default: this.props.navigation.replace('Tabbars')
                }
            } catch (e) {
                this.splashfunc()
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



    async gettoken () {
      
        const token = await AsyncStorage.getItem('@token')
        try {
            if (token != null) {
                return {found: true, to: this.props.route.params.to}
            } else {
                return {found: false, to: 'LoginSignupchoose'}
            }
        } catch {
            return {found: true, to: 'Onboarding'}
        }   
    }



    async puttoken (val) {
        try {
            await AsyncStorage.setItem('@token', val)
        } catch (e) {
            console.log(e)
        }
    }
    



// API CALLS -> INFOS 
    async bookdescreiption () {

        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/search', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            params: {
                category_id: 1
            }
        }
        
        ).then ((res)=> {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch (e=> console.log(e))
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