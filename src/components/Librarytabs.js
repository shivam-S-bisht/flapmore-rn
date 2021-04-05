import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Favouriteslibrary from './Favouriteslibrary';
import Mycontentslibrary from './Mycontentslibrary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';
// import { View } from 'react-native';


export default class Librarytabs extends React.Component {

    tabname = this.props.tabs;
    // libdata = []

    state = {
        render: false,
        fav: [],
        mycontent: [],
        change: null
    }

    componentDidMount() {
        

        this.getalldata()
        this.setState({ render: true })

        // console.log("PPPPPPPPPPPPPPPPPPPPPPPP")
        // console.log("fav", this.state.mycontent)

    }




    async getproductdetails(productid) {
        const token = await AsyncStorage.getItem('@token')

        return axios.get(`/flapmore/product?product_id=${productid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {

            return Object.values(res.data)[0]

        }).catch(e => console.log(e))
    }




    async getalldata() {

        try {
            const bgcolor = ['#EEE5C9', '#BFD2E6', '#D3EEC9', '#EEE5C9']

            var contentdatalist = []
            var favdatalist = []

            return AsyncStorage.getItem("@lib").then(async lib => {
                lib = JSON.parse(lib)
                // con
                // console.log("saved product id", lib)
                var promises = []

                if (lib) {
                    // console.log(lib)

                    if ("mycontent" in lib) {
                        var promises1 = lib.mycontent.map(id => {
                            // console.log(id)
                            return new Promise(async resolve => {
                                this.getproductdetails(id).then(res => {

                                    contentdatalist.push({ product_id: res.product_id, product_name: res.product_name, author: res.author, duration: res.duration, thumbnail_url: res.thumbnail_url, background: bgcolor[res.product_id % 5] })
                                    resolve("ok")
                                })
                            })
                        })
                        promises.push(...promises1)

                    }


                    if ("fav" in lib) {
                        var promises2 = lib.fav.map(id => {
                            // console.log(id)
                            return new Promise(async resolve => {
                                this.getproductdetails(id).then(res => {

                                    // const a = this.state.fav
                                    favdatalist.push({ product_id: res.product_id, product_name: res.product_name, author: res.author, duration: res.duration, thumbnail_url: res.thumbnail_url, background: bgcolor[res.product_id % 5] })
                                    resolve("ok")

                                })
                            })
                        })

                        promises.push(...promises2)


                    }


                    await Promise.all(promises)
                    // console.log(contentdatalist,favdatalist)
                    this.setState({ mycontent: contentdatalist })
                    this.setState({ fav: favdatalist })

                    this.props.props.changelibstate(false)
                    return { contentdatalist, favdatalist }

                } else {
                    return { contentdatalist: [], favdatalist: [] }
                }
            })

        } catch (e) {
            console.log(e)
        }
    }


    handlechange(libres, product_id) {
        AsyncStorage.getItem("@lib").then(async lib => {
            lib = JSON.parse(lib)

            if (libres == "mycontent") {
                let indextobedeleted = lib["mycontent"].indexOf(product_id)
                lib["mycontent"] = lib["mycontent"].filter((val, index) => {
                    if (index != indextobedeleted) {
                        return val
                    }
                })


                // console.log(lib)

                AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("success")
                    }
                })
            }



            else if (libres == "fav") {
                let indextobedeleted = lib["fav"].indexOf(product_id)
                lib["fav"] = lib["fav"].filter((val, index) => {
                    if (index != indextobedeleted) {
                        return val
                    }
                })


                // console.log(lib)

                AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("success")
                    }
                })
            }
            this.getalldata()
        })
    }




    render() {
        
        
        if (this.state.mycontent.length || this.state.fav.length) {

            
            // if (this.props.props.libstate) {
            //     this.getalldata()
            //     console.log("++++++++++++++++++++?????????????????")
            //     this.props.props.changelibstate(false)
            // }
            {this.props.props.libstate?
                this.getalldata():
                null
            }

            if (this.tabname == 'mycontents') {
                return (

                    <Mycontentslibrary d={this.state.mycontent} props={this.props} handlechange={this.handlechange.bind(this)} />
                )
            } else if (this.tabname == 'favourites') {
                return (
                    <Favouriteslibrary d={this.state.fav} props={this.props} handlechange={this.handlechange.bind(this)} />
                )
            }

        } else {
            // console.log("nothing")
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: Dimensions.get("window").width }}>
                    <Text style={{ fontSize: 17 }}>No results to show :/</Text>
                </View>
            )
        }






    }
}