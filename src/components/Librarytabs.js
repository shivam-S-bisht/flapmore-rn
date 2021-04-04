import React from 'react';
import { View, Text } from 'react-native';

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
        mycontent: []
    }

    componentDidMount() {

        this.getalldata()
        this.setState({ render: true })
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

                // console.log("saved product id", res)
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
                    return { contentdatalist, favdatalist }

                } else {
                    return { contentdatalist: [], favdatalist: [] }
                }
            })

        } catch (e) {
            console.log(e)
        }
    }




    render() {
        console.log("this is render...")
        // console.log("fav", this.state.mycontent)

        if (this.state.mycontent.length) {
            // console.log("somethingggg")
            if (this.tabname == 'mycontents') {
                return (
                    <Mycontentslibrary d={this.state.mycontent} />
                )
            } else if (this.tabname == 'favourites') {
                return (
                    <Favouriteslibrary d={this.state.fav} />
                )
            }

        } else {
            // console.log("nothing")
            return (
                <View>
                    <Text>Loading....</Text>
                </View>
            )
        }






    }
}