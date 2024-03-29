import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Tabflapbookscard extends React.Component{

    
    state={
        iconflag: this.props.allfav.includes(this.props.explorecard.product_id)

    }



    async savetofavourites(bookid) {

        try {
            await AsyncStorage.getItem("@lib").then(lib => {
                lib = JSON.parse(lib)
                
                if (lib != null) {
                    if ( "fav" in lib){
                        if (!lib.fav.includes(bookid)) {
                            lib.fav.push(bookid)
    
                            // AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                            //     if (err) {
                            //         console.log(err)
                            //     } else {
                            //         console.log("success")
                            //     }
                            // })
                        }
                    }
                    else {
                        lib["fav"] = [bookid] 
                    }

                } else {
                    var lib = {}
                    lib["fav"] = [bookid]
                    
                }
                
                AsyncStorage.setItem("@lib", JSON.stringify(lib), err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("success")
                    }
                })
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

    

    render() {

        const {product_id, product_name, category_id, author, duration, pages, description, thumbnail_url, created_at, updated_at, tags, bgcolor} = this.props.explorecard;
        

        return(
            <View>
                <TouchableOpacity
                    style={styles.toptouchable}
                    onPress={()=> this.props.props.navigation.push('Splash', {to: "Bookdescription", from: 'Tabbars', product_id: parseInt(product_id)})}
                >
                    <View style={{backgroundColor: bgcolor, paddingHorizontal: 40, margin: 10, borderRadius: 5, paddingVertical: 10}}>
                        <Image source={{uri: thumbnail_url}} style={{borderTopRightRadius: 5, borderTopLeftRadius: 5, position: 'absolute', top: 10, left: 10, right: 10, bottom: 0}} />
                    </View>
                    <View style={styles.contentviewable}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10}}>{product_name.length <= 19 ?product_name:product_name.slice(0, 18)}...</Text>
                        <Text style={{color: '#4D5156', fontSize: 15, marginBottom: 10}}>{author}</Text>
                        <Text style={{color: '#1788AC', fontSize: 15}}>Total Read 14: Min</Text>
                    </View>
                    <View style={styles.bookmarkviewable}>
                        <TouchableOpacity
                            onPress={()=> {
                                // switch(this.state.iconflag) {
                                //     case 0: this.setState({iconflag: 1}); break;
                                //     case 1: this.setState({iconflag: 0}); break;
                                // }
                                if (this.state.iconflag) {
                                    this.deletefromfavourites(product_id)
                                    this.setState({iconflag: 0})
                                } else {
                                    this.savetofavourites(product_id)
                                    this.setState({iconflag: 1})

                                }
                            }}
                        >
                            
                            {/* <Maticon name={this.state.iconflag?'bookmark':'bookmark-plus-outline'} size={35} color="black" />   */}
                            <Maticon name={this.state.iconflag?'bookmark':'bookmark-plus-outline'} size={35} color="black" />  
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    toptouchable: {
        // flex: 1,
        backgroundColor: 'white',
        // marginRight: 15,
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