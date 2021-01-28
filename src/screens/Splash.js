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


// tabbar props handler ...
    async tabbarfunc () {
        const {_, to} = await this.gettoken()
        this.props.navigation.replace(to)

    }



// createnewaccount props handler ...
    async createnewaccountfunc () {

        const res = this.createnewaccountapifunc(this.props.route.params.emailorphone, this.props.route.params.password)
        res.then(()=> {
            this.puttoken(res.data.token)
            this.props.navigation.replace(this.props.route.params.to)
        }).catch (err => {
            console.log(`ERROR: ${err}`)
        })
    }



// login props handler ...
    async loginfunc () {
        
        const res = this.loginapifunc(this.props.route.params.emailorphone, this.props.route.params.password)
        res.then(() => {
            this.puttoken(res.data.token)
            this.props.navigation.replace(this.props.route.params.to)
        }) .catch (err => {
            console.log(`ERROR: ${err}`)
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



// read token 
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



// save token 
    async puttoken (val) {
        try {
            await AsyncStorage.setItem('@token', val)
        } catch (e) {
            console.log(e)
        }
    }
    


// API CALLS -> login
async loginapifunc (emailMobile, password) {

    return new Promise ((resolve, reject) => {
        axios.post('/login', {
            emailMobile,
            password
        }).then((res)=> {
            if (res.status == 200) {
                resolve()
            } else {
                reject('No account found')
            }
        }).catch (()=> {
            reject('response from server:400, Some error occured')
        })
    }) 
}



// API CALLS -> create new account
async createnewaccountapifunc (emailMobile, password) {

    return new Promise ((resolve, reject) => {
        axios.post('/signup', {
            emailMobile,
            password
        }).then((res)=> {
            if (res.status == 200) {
                resolve()
            } else {
                reject('Account already exists')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}



// API CALLS -> search 
    async searchapifunc (category_id, tags, from, to) {

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



// API CALLS -> product details
    async productdetailsapifunc (product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }
        
        ).then ((res)=> {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch (e=> console.log(e))
    }

    

// API CALLS -> product all tags 
    async producttagsapifunc (product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product/tags', {
            headers: {
            'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }
        
        ).then ((res)=> {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch (e=> console.log(e))
    }



// API CALLS -> product all files 
    async productfilesapifunc (product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product/files', {
            headers: {
            'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }
        
        ).then ((res)=> {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch (e=> console.log(e))
    }



// API CALLS -> list all categories 
    async getallcategoriesapifunc (product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/categories', {
            headers: {
            'Authorization': `Bearer ${token}`
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