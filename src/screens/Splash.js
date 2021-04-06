// PRE-PROCESSESS
import React from 'react';
import { Text, View, Image, Animated } from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SoundPlayer from 'react-native-sound-player';

import bookdescription from '../infos/bookdescription';

export default class Splash extends React.Component {

    constructor() {
        super();
        this.state = {
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



    // FIRST splash
    async splashfunc() {

        // this.dummiedata().then(data => {
        //     console.log(data)
        // })
        // const token = await AsyncStorage.getItem('@token')
        const { found, token } = await this.gettoken()
        // this.gettoken().then(res => console.log(res))
        if (found) {

            // check the validity of token .......
            this.validatetoken(token).then(res => {
                // console.log(res)
                if (res == 200) {

                    this.dummiedata().then(data => {
                        console.log(data)
                        this.props.navigation.replace('Tabbars', {data})
                    })
                    
                }
                else {
                    this.props.navigation.replace("LoginSignupchoose")
                }
            })

            //


        } else {
            this.props.navigation.replace('Onboarding')
        }

    }


    // tabbar props handler ...
    async tabbarfunc(productidparam) {
        

        switch (this.props.route.params.to) {
            case "Bookdescription":


                // console.log(this.props.route.params)
                const { found, token } = await this.gettoken()
                if (found) {
                    this.validatetoken(token).then(res => {
                        if (res == 200) {

                            this.getproductdetails(productidparam).then(productdetails => {
                                this.getproductfiles(productidparam).then(productfiles => {
                                    this.getproducttags(productidparam).then(async producttags => {

                                        const pdt = Object.values(producttags) //object -> list
                                        var tagdetailslist = []

                                        const bgcolor = ['#EEE5C9', '#BFD2E6', '#D3EEC9', '#EEE5C9']
                                        let promises = pdt.map((Object) => {
                                            return new Promise(async resolve => {
                                                return this.gettagdetails(Object.tag_name)
                                                    .then((res) => {
                                                        console.log("wefufewoihweofihweofihewofih")
                                                        var array = res.hits.hits.map((item, index) => {
                                                            return { product_id: parseInt(item._id), product_name: item._source.product_name, author: item._source.author, duration: item._source.duration, thumbnail_url: item._source.thumbnail_url, background: bgcolor[index] }
                                                        })
                                                        tagdetailslist.push(...array)
                                                        resolve("ok")
                                                    }).catch(e => console.log(e))
                                            })
                                        })

                                        await Promise.all(promises)

                                        this.props.navigation.replace("Bookdescription", { productdetails, productfiles, tagdetailslist })


                                    })
                                })

                            })
                        } else {
                            this.props.navigation.replace("LoginSignupchoose")

                        }
                    }).catch(_ => this.props.navigation.replace("LoginSignupchoose"))
                }


                break;

            case "Tagscreen":
                this.getallfavs().then(allfav => {

                    this.gettagdetails(this.props.route.params.tagname).then(data => {
                        this.props.navigation.replace("Tagscreen", { data, tagname: this.props.route.params.tagname, allfav })
                    })
                })

                break;
            case "Settings":

        }




    }



    // createnewaccount props handler ...
    async createnewaccountfunc() {

        const res = this.createnewaccountapifunc(this.props.route.params.emailorphone, this.props.route.params.password)
        res.then((token) => {
            this.puttoken(token)
            this.savecred(this.props.route.params.emailorphone)
            this.props.navigation.replace(this.props.route.params.to)
        }).catch(err => {
            this.props.navigation.goBack()
            console.log(`ERROR: ${err}`)
        })
    }



    // login props handler ...
    async loginfunc() {

        const res = this.loginapifunc(this.props.route.params.emailorphone, this.props.route.params.password)
        res.then((token) => {
            this.puttoken(token)
            this.savecred(this.props.route.params.emailorphone)
            this.props.navigation.replace(this.props.route.params.to)
        }).catch(err => {
            this.props.navigation.goBack()
            console.log(`ERROR: ${err}`)
        })
    }




    async getduration() {

        var duration = bookdescription.duration;

        var min = Math.floor(duration / 60);
        var sec = Math.floor(duration % 60);

        if (`${min}`.length == 1) {
            min = `0${min}`
        }

        if (`${sec}`.length == 1) {
            sec = `0${sec}`
        }

        return { duration: `${min}:${sec}`, maxvalue: duration }
    }



    async bookdescriptionfunc() {

        const to = this.props.route.params.to
        if (to == 'Pdfview') {
            console.log(this.props.route.params)
            this.props.navigation.replace(to, { currpage: this.props.route.params.currpage})

        } else if (to == 'Musicplayer') {


            const sound = this.props.route.params.soundobj
            sound.play()

            this.props.navigation.replace(to, { from: 'Bookdescription', soundobj: sound })




        }

    }



    // FIRST
    // splash animation
    animatedpromise() {
        const animatedpromise = new Promise(async res => {
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
                    case 'Tabbars': this.tabbarfunc(this.props.route.params.product_id); break;
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
    timer() {
        return new Promise(res => {
            setTimeout(() => {
                res()
            }, 1000)
        })
    }



    // read token 
    async gettoken() {

        const token = await AsyncStorage.getItem('@token')
        // console.log(typeof(token))
        try {
            if (token != null) {
                return { found: true, to: this.props.route.params.to, token: token }
            } else {
                return { found: false, to: 'LoginSignupchoose', token }
            }
        } catch {
            // console.log(e)
            return { found: true, to: 'Onboarding', token }
        }
    }



    // save token 
    async puttoken(val) {
        try {
            await AsyncStorage.setItem('@token', val)

        } catch (e) {
            console.log(e)
        }
    }



    // save credentials 
    async savecred(val) {
        try {
            await AsyncStorage.setItem('@emailVal', val)
        } catch (e) {
            console.log(e)
        }
    }



    // API CALLS -> login
    async loginapifunc(emailMobile, password) {

        return new Promise((resolve, reject) => {
            axios.post('/login', {
                emailMobile,
                password
            }).then((res) => {
                if (res.status == 200) {
                    resolve(res.data.token)
                } else {
                    reject('No account found')
                }
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })
        })
    }





    // API CALLS -> create new account
    async createnewaccountapifunc(emailMobile, password) {

        return new Promise((resolve, reject) => {
            axios.post('/signup', {
                emailMobile,
                password
            }).then((res) => {
                if (res.status == 200) {
                    resolve('OTP sent')
                } else {
                    reject('Account already exists')
                }
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })

        })
    }



    // API CALLS -> verify create new account
    async verifysignupapifunc(emailMobile, userId, otp) {

        return new Promise((resolve, reject) => {
            axios.post('/verifySignup', {
                emailMobile,
                userId,
                otp
            }).then((res) => {
                if (res.status == 200) {
                    resolve('Success')
                } else {
                    reject('OTP Already verified')
                }
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })

        })
    }



    // API CALLS -> resend otp
    async resendotpapifunc(emailMobile, userId) {

        return new Promise((resolve, reject) => {
            axios.post('/resendotp', {
                emailMobile,
                userId
            }).then((res) => {
                if (res.status == 200) {
                    resolve('OTP resent successfully')
                } else {
                    reject('User not present, Signup to continue')
                }
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })

        })
    }



    // API CALLS -> forget pass
    async forgetpassapifunc(emailMobile) {

        return new Promise((resolve, reject) => {
            axios.post('/forgetPassword', {
                emailMobile
            }).then((res) => {
                if (res.status == 200) {
                    resolve(res.data)  // userId, mobile
                } else {
                    reject('Account does not exists')
                }
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })

        })
    }



    // API CALLS -> verify forget pass
    async verifyforgetpassapifunc(emailMobile, userId, otp, password) {

        return new Promise((resolve, reject) => {
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
            }).catch(() => {
                reject('response from server:400, Some error occured')
            })

        })
    }


    async getallfavs() {
        return AsyncStorage.getItem("@lib").then(async lib => {
            lib = JSON.parse(lib)
            if (lib && "fav" in lib) {
                return lib.fav
            } else {
                return []
                console.log("nothing in lib")
            }
        }
        ).catch (e => console.log("Tagscreen Error:------------->>>>>>>>>>", e))
    }



    // API CALLS -> dynamic dummie data using tags
    async dummiedata() {
        const pdt = ["Fiction", "History"] //object -> list
        var tagdetailslist = []

        const bgcolor = ['#EEE5C9', '#BFD2E6', '#D3EEC9', '#EEE5C9']
        let promises = pdt.map((Object) => {
            return new Promise(async resolve => {
                return this.gettagdetails(Object.tag_name)
                    .then((res) => {

                        var array = res.hits.hits.map((item, index) => {
                            // console.log(item._id)
                            return { product_id: parseInt(item._id), product_name: item._source.product_name, author: item._source.author, duration: item._source.duration, thumbnail_url: item._source.thumbnail_url, background: bgcolor[index] }
                        })
                        tagdetailslist.push(...array)
                        resolve("ok")
                    }).catch(e => console.log(e))
            })
        })

        await Promise.all(promises)
        tagdetailslist = tagdetailslist.slice(0, 4)
        // console.log(tagdetailslist)
        return tagdetailslist

    }

    // }



    // API CALLS -> product details
    async productdetailsapifunc(product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }

        ).then((res) => {
            // console.log(res, '\n', JSON.stringify(res.data))
        }).catch(e => console.log(e))
    }



    // API CALLS -> product all tags 
    async producttagsapifunc(product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product/tags', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }

        ).then((res) => {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch(e => console.log(e))
    }



    // API CALLS -> product all files 
    async productfilesapifunc(product_id) {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/product/files', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                product_id
            }
        }

        ).then((res) => {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch(e => console.log(e))
    }



    // API CALLS -> list all categories 
    async getallcategoriesapifunc() {
        const token = await AsyncStorage.getItem('@token')

        await axios.get('/flapmore/categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            console.log(res, '\n', JSON.stringify(res.data))
        }).catch(e => console.log(e))
    }







    async validatetoken(token) {
        // const token = await AsyncStorage.getItem('@token')

        return await axios.get(`/flapmore-user/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            // console.log(res)
            return res.status
            // this.props.navigation.replace(to, {data: res.data, tagname})
            // console.log(typeof(data))
        }).catch(e => console.log(e))
    }




    // API CALLS -> get tag details 
    async gettagdetails(tagname) {
        const token = await AsyncStorage.getItem('@token')




        return await axios.get(`/flapmore/search?category_id=1&tags=${tagname}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            return res.data
            // this.props.navigation.replace(to, {data: res.data, tagname})
            // console.log(typeof(data))
        }).catch(e => console.log(e))
    }



    // API CALLS -> get product details 
    async getproductdetails(productid) {
        const token = await AsyncStorage.getItem('@token')

        return await axios.get(`/flapmore/product?product_id=${productid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            // Object.keys(res.data).forEach(key => {

            // console.log(res.data[key])
            // Object.values(object1)
            return Object.values(res.data)[0]
            // })
            // console.log(typeof(data))
        }).catch(e => console.log(e))
    }








    // API CALLS -> get product files
    async getproductfiles(productid) {
        const token = await AsyncStorage.getItem('@token')

        return await axios.get(`/flapmore-user/product/files?product_id=${productid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            return res.data
            // this.getproducttags(to, productid, productdetails, res.data)
            // this.props.navigation.replace(to, {productfiles: res.data, productdetails})

            // console.log(typeof(data))
        }).catch(_ => this.props.navigation.replace('LoginSignupchoose'))
    }



    // API CALLS -> get product related tags
    async getproducttags(productid) {

        return await axios.get(`/flapmore/product/tags?product_id=${productid}`).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            return res.data
            // this.props.navigation.replace(to, {producttags: res.data, productdetails, productfiles})

            // console.log(typeof(data))
        }).catch(_ => this.props.navigation.replace('LoginSignupchoose'))


    }




    // Tabbars
    // BEST TRENDY SELECTION
    // async searchwithcategory () {
    //     this.searchapifunc (1, "", "besttrendy", "")
    // }






    // MAIN -------->>>>
    render() {

        // this.searchwithcategory()
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Image source={require('../../assets/splash-icon.jpg')} style={{ marginBottom: 5 }} />
                <Image source={require('../../assets/home-iconname.png')} style={{ marginBottom: 5 }} />
                <Text style={{ color: '#696C7B' }}>Flap more for smart contents</Text>

                <View style={{ backgroundColor: '#E3E3E5', width: 210, height: 6, marginTop: 10, borderRadius: 10 }}>
                    <Animated.View style={{ backgroundColor: '#3D6DFF', height: 6, width: this.state.animatedValue, borderRadius: 10 }}>

                    </Animated.View>
                </View>
            </View>
        );
    }
}