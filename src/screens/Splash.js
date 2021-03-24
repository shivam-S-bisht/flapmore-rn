// PRE-PROCESSESS
import React from 'react';
import {Text, View, Image, Animated} from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SoundPlayer from 'react-native-sound-player';

import bookdescription from '../infos/bookdescription';

export default class Splash extends React.Component{

    constructor() {
        super();
        this.state={
            animatedValue: new Animated.Value(0)
        }

        this._isMounted = false;

    }


// FIRST
// called before mounting
    componentDidMount() {
        // this._isMounted = true;

        this.animatedpromise() 
    }


    componentWillUnmount () {
        // this.timer && clearInterval(this.timer);
        // this._isMounted = false;
    }

// FIRST splash
    async splashfunc () {
        const {found, _} = await this.gettoken()
        if (found) {

            // check the validity of token .......
            //
            //
            
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
        res.then((token)=> {
            this.puttoken(token)
            this.savecred(this.props.route.params.emailorphone)
            this.props.navigation.replace(this.props.route.params.to)
        }).catch (err => {
            this.props.navigation.goBack()
            console.log(`ERROR: ${err}`)
        })
    }



// login props handler ...
    async loginfunc () {
        
        const res = this.loginapifunc(this.props.route.params.emailorphone, this.props.route.params.password)
        res.then((token) => {
            this.puttoken(token)
            this.savecred(this.props.route.params.emailorphone)
            this.props.navigation.replace(this.props.route.params.to)
        }) .catch (err => {
            this.props.navigation.goBack()
            console.log(`ERROR: ${err}`)
        })
    }




    async getduration () {

        // const background = await AsyncStorage.getItem('@background')
        // if (background == 'true') {
        //     // await AsyncStorage.setItem('@background', 'false')
        //     SoundPlayer.stop()

        // }
        // SoundPlayer.loadUrl(bookdescription.playbookuri)
        // SoundPlayer.stop()

        // const info = await SoundPlayer.getInfo()
        // console.log(info)
        var duration = bookdescription.duration;

        var min = Math.floor(duration/60);
        var sec = Math.floor(duration%60);

        if (`${min}`.length == 1) {
            min = `0${min}`
        }

        if (`${sec}`.length == 1) {
            sec = `0${sec}`
        }

        return {duration: `${min}:${sec}`, maxvalue: duration}
    }



    async bookdescriptionfunc () {

        const to = this.props.route.params.to
        if (to == 'Pdfview') {
            this.props.navigation.replace(to)

        } else if (to == 'Musicplayer'){

            
            const sound = this.props.route.params.soundobj
            sound.play()

            this.props.navigation.replace(to, {from: 'Bookdescription', soundobj: sound})




        }

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
            // console.log(this.props.route.params)
            try {
                switch (this.props.route.params.from) {
                    case 'Tabbars': this.tabbarfunc(); break;
                    case 'Createnewaccount': this.createnewaccountfunc(); break;
                    case 'Login': this.loginfunc(); break;
                    // case 'Loginviaotp': loginviaotp(); break;
                    case 'Bookdescription': this.bookdescriptionfunc(); break;
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



// save credentials 
async savecred (val) {
    try {
        await AsyncStorage.setItem('@emailVal', val)
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
                resolve(res.data.token)
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
                resolve('OTP sent')
            } else {
                reject('Account already exists')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}



// API CALLS -> verify create new account
async verifysignupapifunc (emailMobile, userId, otp) {

    return new Promise ((resolve, reject) => {
        axios.post('/verifySignup', {
            emailMobile,
            userId,
            otp
        }).then((res)=> {
            if (res.status == 200) {
                resolve('Success')
            } else {
                reject('OTP Already verified')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}



// API CALLS -> resend otp
async resendotpapifunc   (emailMobile, userId) {

    return new Promise ((resolve, reject) => {
        axios.post('/resendotp', {
            emailMobile,
            userId
        }).then((res)=> {
            if (res.status == 200) {
                resolve('OTP resent successfully')
            } else {
                reject('User not present, Signup to continue')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}



// API CALLS -> forget pass
async forgetpassapifunc (emailMobile) {

    return new Promise ((resolve, reject) => {
        axios.post('/forgetPassword', {
            emailMobile
        }).then((res) => {
            if (res.status == 200) {
                resolve(res.data)  // userId, mobile
            } else {
                reject('Account does not exists')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}



// API CALLS -> verify forget pass
async verifyforgetpassapifunc (emailMobile, userId, otp, password) {

    return new Promise ((resolve, reject) => {
        axios.post('/verifyForgetPassword', {
            emailMobile,
            userId,
            otp,
            password 
        }).then((res) => {
            if (res.status == 200) {
                resolve()  
            } else {
                reject('Account does not exists')
            }
        }) .catch (() => {
            reject('response from server:400, Some error occured')
        })
        
    }) 
}


// API CALLS -> search 
    async searchapifunc (category_id, tags, from, to) {

        let params = {}
        const token = await AsyncStorage.getItem('@token')
        if (category_id) params.category_id = category_id
        if (tags) params.tags = tags

        await axios.get('/flapmore/search', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            params
        }
        
        ).then ((res)=> {
            if (from == 'besttrendy') {
                // console.log(res, '\n', JSON.stringify(res.data.hits.hits))
                res.data.hits.hits.forEach(elm => {
                    console.log(elm._source, "\n")
                });
            }
            
            // return res.data
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
    async getallcategoriesapifunc () {
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






// Tabbars
// BEST TRENDY SELECTION
    async searchwithcategory () {
        this.searchapifunc (1, "", "besttrendy", "")
    }






// MAIN -------->>>>
    render () {

        this.searchwithcategory()
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