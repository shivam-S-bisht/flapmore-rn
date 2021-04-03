import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

import Favouriteslibrary from './Favouriteslibrary';
import  Mycontentslibrary from './Mycontentslibrary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';


export default class Librarytabs extends React.Component {

    tabname = this.props.tabs;
    libdata = []

    async componentDidMount () {

        this._unsubscribe = this.props.props.navigation.addListener('focus', async () => {
            await this.getalldata().then(res => {
                this.libdata.push(res)
            })
            // console.log("weuigfewfguowefgwefgiowefgoiwefhio", this.libdata)

        })
    }

    


    async getproductdetails(productid) {
        const token = await AsyncStorage.getItem('@token')

        return await axios.get(`/flapmore/product?product_id=${productid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {

            return Object.values(res.data)[0]
            // })
            // console.log(typeof(data))
        }).catch(e => console.log(e))
    }




    async getalldata() {

        try {
            const bgcolor = ['#EEE5C9', '#BFD2E6', '#D3EEC9', '#EEE5C9']

            var contentdatalist = []
            var favdatalist = []

            await AsyncStorage.getItem("@lib").then(async lib => {
                lib = JSON.parse(lib)

                // console.log("saved product id", res)
                var promises = []

                if (lib != null) {
                    // console.log(lib)

                    if ("mycontent" in lib) {
                        var promises1 = lib.mycontent.map(id => {
                            // console.log(id)
                            return new Promise(async resolve => {
                                return this.getproductdetails(id).then(res => {
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
                                return this.getproductdetails(id).then(res => {
                                    favdatalist.push({ product_id: res.product_id, product_name: res.product_name, author: res.author, duration: res.duration, thumbnail_url: res.thumbnail_url, background: bgcolor[res.product_id % 5] })
                                    resolve("ok")
                                })
                            })
                        })

                        promises.push(...promises2)


                    }


                    await Promise.all(promises)

                }


                // console.log("LIBBBb", favdatalist, "\n", contentdatalist)
                return { contentdatalist, favdatalist }

            }).catch(e => {
                console.log(e)
                return { contentdatalist, favdatalist }
            })

        } catch (e) {
            console.log(e)
            return { contentdatalist: [], favdatalist: [] }
        }


        // return tagdetailslist

    }




    render() {
        console.log("wertyuigfdfewkjfbewfbweifsfghjk", this.libdata)
        if (this.tabname == 'mycontents') {
            return (
                <Mycontentslibrary d={this.libdata.mycontent} />
            )
        } else if (this.tabname == 'favourites') {
            return (
                <Favouriteslibrary d={this.libdata.fav} />
            )
        }
    }
}