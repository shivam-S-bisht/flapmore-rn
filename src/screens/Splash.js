// PRE-PROCESSESS
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


// FIRST
// called before mounting
    componentDidMount() {
        this.animatedpromise() 
    }


// FIRST splash
    async splashfunc () {
        const {found, _} = await this.gettoken()
        if (found) {
            this.props.navigation.replace('Tabbars')
        } else {
            this.props.navigation.replace('Onboarding')
        }

    }


// tabbar props ...
    async tabbarfunc () {
        const {_, to} = await this.gettoken()
        this.props.navigation.replace(to)

    }



// createnewaccount props ...
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



// login props ...
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



// FIRST
// splash animation
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



// timeout for splash animation
    timer () {
        return  new Promise(res=> {
            setTimeout(()=> {
                res()
            }, 1000)
        })
    }



// read token from device's storage
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



// save tooken to device's storage
    async puttoken (val) {
        try {
            await AsyncStorage.setItem('@token', val)
        } catch (e) {
            console.log(e)
        }
    }
    



// API CALLS -> INFOS 
    async searchapi (category_id, tags, from, to) {

        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/search', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            params: {
                category_id,
                tags
            }
        }
        
        ).then ((res)=> {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch (e=> console.log(e))
    }



// MAIN -------->>>>
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