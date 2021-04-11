import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fontawesomeicon from 'react-native-vector-icons/FontAwesome';



export default class Exploretabflapbookscard extends React.Component {


    state = {
        iconflag: 0,
        bookmarked: 0

    }

    componentDidMount() {
        this.isfavourite()
    }


    async savetofavourites(bookid) {

        try {
            await AsyncStorage.getItem("@lib").then(lib => {
                lib = JSON.parse(lib)
                if (lib != null && "fav" in lib) {
                    if (!lib.fav.includes(bookid)) {
                        lib.fav.push(bookid)

                        AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log("success")
                            }
                        })
                    }

                } else {
                    let lib = {}
                    lib["fav"] = [bookid]
                    AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("success")
                        }
                    })

                }

            })

        } catch (e) {
            console.log(e)
        }


    }

    async deletefromfavourites(product_id) {
        AsyncStorage.getItem("@lib").then(async lib => {
            lib = JSON.parse(lib)

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

        })
    }

    async isfavourite() {
        await AsyncStorage.getItem("@lib").then(lib => {
            lib = JSON.parse(lib)
            // console.log("llllllllllllllllllll", typeof(lib))
            if (lib != null && "fav" in lib) {
                // console.log("+++++++++++++++++++++>>>>>>>", lib.fav)
                if (lib.fav.includes(this.props.explorecard.product_id)) {
                    // console.log("imhereeeee")

                    this.setState({ bookmarked: 1 })
                }

            }
        }
        ).catch(e => console.log(e))
    }

    render() {

        const { product_id, thumbnail_url, product_name, author, duration, background } = this.props.explorecard;

        return (
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={() => {
                        // this.props.props.props.navigation.push('Splash', {to: 'Bookdescription', from: 'Tabbars', product_id: parseInt(product_id)})
                        this.props.props.navigation.push('Splash', { to: 'Bookdescription', from: 'Tabbars', product_id: parseInt(product_id) })

                    }}
                >
                    <View style={{ backgroundColor: background, paddingHorizontal: 30, margin: 10, borderRadius: 5, paddingVertical: 10 }}>
                        <Image source={require("../../assets/flapbookpic.png")} style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} />
                    </View>
                    <View style={styles.contentviewable}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{product_name.length <= 17 ? product_name : `${product_name.slice(0, 17)}...`}</Text>
                        <Text style={{ color: '#4D5156', fontSize: 15, marginBottom: 10 }}>{author}</Text>

                        {/* hardcoded */}
                        <Text style={{ color: '#1788AC', fontSize: 15 }}>Total Read {14}: Min</Text>
                        {/* hardcoded */}

                    </View>
                    <View style={styles.bookmarkviewable}>
                        <TouchableOpacity
                            onPress={() => {

                                this.savetofavourites(parseInt(product_id))

                                if (this.state.bookmarked) {
                                    this.deletefromfavourites(product_id)
                                    this.setState({ bookmarked: 0 })
                                } else {
                                    this.setState({ bookmarked: 1 })
                                }
                            }}
                        >
                            {/* {console.log(this.state.bookmarked)} */}
                            <Maticon name={this.state.bookmarked ? 'bookmark' : 'bookmark-plus-outline'} size={35} color="black" />
                            {/* <Fontawesomeicon name={this.state.bookmarked ? 'bookmark' : 'bookmark-o'} size={25} color='#fff' /> */}
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    toptouchable: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },

    contentviewable: {
        paddingVertical: 10,
        paddingRight: 10,
        paddingTop: 20
    },

    bookmarkviewable: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }
})