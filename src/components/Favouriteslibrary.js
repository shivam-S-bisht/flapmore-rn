import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign';

import Favouriteslibrarycard from './Favouriteslibrarycard';

// import favouriteslibrarybooks from '../infos/favouriteslibrarybooks'

export default class Favouriteslibrary extends React.Component {
    render() {

        // console.log("fwefwefwef", this.props)

        if (this.props.d.length) {
            return (
                <View style={styles.topviewable}>
                    <ScrollView>
                        <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

                        <View style={styles.fourthviewable}>
                            <FlatList
                                keyExtractor={(_, index) => index.toString()}
                                data={this.props.d}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity
                                                style={{
                                                    flex: 1,
                                                    // backgroundColor: 'red',
                                                    marginRight: 15,
                                                    borderRadius: 5,
                                                    flexDirection: 'row'
                                                }}
                                            >
                                                <View style={{ backgroundColor: item.background, paddingHorizontal: 30, margin: 10, borderRadius: 5, paddingVertical: 10 }}>
                                                    <Image source={require("../../assets/flapbookpic.png")} style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} />
                                                </View>
                                                <View style={{
                                                    paddingVertical: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 20
                                                }}>
                                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{item.product_name.length <= 17 ? item.product_name : `${item.product_name.slice(0, 15)}...`}</Text>
                                                    <Text style={{ color: '#4D5156', fontSize: 15, marginBottom: 10 }}>{item.author}</Text>


                                                    <Text style={{ color: '#1788AC', fontSize: 15 }}>Total Read {14}: Min</Text>
                                                </View>
                                                <View style={{
                                                    flex: 1,
                                                    // justifyContent: 'center',
                                                    alignItems: 'center',
                                                    paddingTop: 20
                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            console.log(this.props.props)
                                                            // this.props.props.navigation.navigate("Library")onPress={() => {
                                                            this.props.handlechange("fav", parseInt(item.product_id))
                                                        }}
                                                    >
                                                        <Anticon name="delete" size={24} color="black" />
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            );

        } else {
            return (
                <View style={[styles.topviewable, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 17 }}>No results to show :/</Text>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        width: Dimensions.get('window').width
    }
})