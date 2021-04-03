import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Touchable } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import Feathericon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'react-native-axios';



import Librarytabs from '../components/Librarytabs';


export default class Library extends React.Component {

    state = {
        whichone: 0,
        // libdata: []
    }



    componentDidMount() {
        this.gettoken().then(res => {
            console.log("hello")
            if (res.found) {
                this.validatetoken(res.token).then(status => {
                    if (status != 200) {
                        console.log("Token invalid found at Library")
                        this.props.navigation.replace(res.to)
                    }
                })
            } else {
                console.log("Token not found at Library")
                this.props.navigation.replace(res.to)
            }
        })

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

    async gettoken() {

        const token = await AsyncStorage.getItem('@token')
        // console.log(typeof(token))
        try {
            if (token != null) {
                return { found: true, token, to: "LoginSignupchoose" }
            } else {
                return { found: false, to: 'LoginSignupchoose' }
            }
        } catch {
            // console.log(e)
            return { found: false, to: 'LoginSignupchoose' }
        }
    }



    // async getproductdetails(productid) {
    //     const token = await AsyncStorage.getItem('@token')

    //     return await axios.get(`/flapmore/product?product_id=${productid}`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }

    //     ).then((res) => {

    //         return Object.values(res.data)[0]
    //         // })
    //         // console.log(typeof(data))
    //     }).catch(e => console.log(e))
    // }




    // async getalldata() {

    //     try {
    //         const bgcolor = ['#EEE5C9', '#BFD2E6', '#D3EEC9', '#EEE5C9']

    //         var contentdatalist = []
    //         var favdatalist = []

    //         await AsyncStorage.getItem("@lib").then(async lib => {
    //             lib = JSON.parse(lib)

    //             // console.log("saved product id", res)
    //             var promises = []

    //             if (lib != null) {
    //                 // console.log(lib)

    //                 if ("mycontent" in lib) {
    //                     var promises1 = lib.mycontent.map(id => {
    //                         // console.log(id)
    //                         return new Promise(async resolve => {
    //                             return this.getproductdetails(id).then(res => {
    //                                 contentdatalist.push({ product_id: res.product_id, product_name: res.product_name, author: res.author, duration: res.duration, thumbnail_url: res.thumbnail_url, background: bgcolor[res.product_id % 5] })
    //                                 resolve("ok")
    //                             })
    //                         })
    //                     })

    //                     promises.push(...promises1)

    //                 }


    //                 if ("fav" in lib) {
    //                     var promises2 = lib.fav.map(id => {
    //                         // console.log(id)
    //                         return new Promise(async resolve => {
    //                             return this.getproductdetails(id).then(res => {
    //                                 favdatalist.push({ product_id: res.product_id, product_name: res.product_name, author: res.author, duration: res.duration, thumbnail_url: res.thumbnail_url, background: bgcolor[res.product_id % 5] })
    //                                 resolve("ok")
    //                             })
    //                         })
    //                     })

    //                     promises.push(...promises2)


    //                 }


    //                 // if ("fav" in lib) {
    //                 //     console.log("fav")
    //                 //     var promises2 = lib.fav.map(id => {
    //                 //         return new Promise(async resolve => {
    //                 //             return this.getproductdetails(id).then(res => {
    //                 //                 var array = res.map((item, index) => {
    //                 //                     return { product_id: item.product_id, product_name: item.product_name, author: item.author, duration: item.duration, thumbnail_url: item.thumbnail_url, index, background: bgcolor[index % 4] }
    //                 //                 })

    //                 //                 favdatalist.push(...array)
    //                 //                 resolve("ok")
    //                 //             })
    //                 //         })
    //                 //     })

    //                 // }


    //                 await Promise.all(promises)

    //             }


    //             console.log("LIBBBb", favdatalist, "\n", contentdatalist)
    //             return { contentdatalist, favdatalist }

    //         }).catch(e => {
    //             console.log(e)
    //             return { contentdatalist, favdatalist }
    //         })

    //     } catch (e) {
    //         console.log(e)
    //         return { contentdatalist: [], favdatalist: [] }
    //     }


    //     // return tagdetailslist

    // }

    render() {

        // const libdata = this.getalldata()


        return (
            <View style={styles.topviewable}>
                <View style={styles.headerviewable}>
                    <Text style={styles.librarytitle}>Library</Text>
                    <TouchableOpacity>
                        <Feathericon name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.librarytabsviewable}>
                    <View style={[styles.touchabletabviewable, { borderBottomColor: this.state.whichone ? '#fff' : '#3D6DFF' }]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>My contents</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.touchabletabviewable, { borderBottomColor: this.state.whichone ? '#3D6DFF' : '#fff' }]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>Favourites</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.flatlistviewable}>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={[{ content: 'mycontents' }, { content: 'favourites'}]}
                        renderItem={({ item }) => <Librarytabs tabs={item.content} props={this.props} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').width}
                        onScroll={e => {
                            switch (true) {
                                case e.nativeEvent.contentOffset.x < 170: this.setState({ whichone: 0 }); break;
                                case 170 < e.nativeEvent.contentOffset.x: this.setState({ whichone: 1 }); break;

                            }
                            // console.log(e.nativeEvent.contentOffset.x)
                        }}
                    />
                </View>
            </View>
        );



    }
}

const styles = StyleSheet.create({

    topviewable: {
        flex: 1,
        backgroundColor: '#fff'
    },

    headerviewable: {
        // flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10
    },

    librarytitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    librarytabsviewable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red'
    },

    touchabletabviewable: {
        // backgroundColor: 'blue', 
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: 5
    },

    touchabletabtext: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    flatlistviewable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
})