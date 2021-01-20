import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Switch, } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Settings extends React.Component{

    state={
        isenabled: 0
    }

    render () {
        return (
            <ScrollView>

            
            <SafeAreaView style={styles.topviewable}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 20
                    }}
                >
                    <TouchableOpacity>
                        <Ionicon name='chevron-back-outline' size={30} color='black' />
                    </TouchableOpacity>
                    <Text
                        style={{
                            paddingHorizontal: 20,
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Settings</Text>
                </View>
                <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>
                <View 
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18 
                        }}
                    >Profile Details</Text>
                    <View
                        style={{
                            paddingVertical: 10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='account-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='history' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='bookmark-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Bookmarks</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                <View 
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18 
                        }}
                    >Other Settings</Text>
                    <View
                        style={{
                            paddingVertical: 10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='star-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Rate Our App</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='update' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Update Your App</Text>
                        </TouchableOpacity>
                        <View
                            style={styles.profiledetailstouchable}
                        >
                            <Ionicon name='ios-megaphone-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Promotional Notification</Text>
                            <Switch 
                                style={{paddingHorizontal: 20}}
                                trackColor={{ false: "relightgreyd", true: "#C5DDF4" }}
                                thumbColor={this.state.isenabled ? "#0080FF" : "lightgrey"}
                                onValueChange={(val)=>this.setState({isenabled: val})}
                                value={this.state.isenabled}
                            />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                <View 
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18 
                        }}
                    >Connect</Text>
                    {/* <Text>feuwhfe</Text> */}
                    <View
                        style={{
                            paddingVertical: 10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='email-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Email US</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Maticon name='message-settings-outline' size={30} color='black' />
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Follow us on Social</Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 50,
                            paddingBottom: 20
                        }}
                    >
                        <TouchableOpacity>
                            <Image source={require('../../assets/instagram.png')}  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/facebook.png')}  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/twitter.png')}  />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor: '#D8DDE5', height: 18}}></View>

                <View 
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18 
                        }}
                    >About</Text>
                    {/* <Text>feuwhfe</Text> */}
                    <View
                        style={{
                            paddingVertical: 10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >{'Terms & Condition'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >Help Center</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.profiledetailstouchable}
                        >
                            <Text
                                style={styles.profiledetailstouchabletext}
                            >App Version</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor: '#D8DDE5', height: 88}}></View>

            </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    profiledetailstouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },

    profiledetailstouchabletext: {
        paddingHorizontal: 20,
        fontSize: 17
    }
})