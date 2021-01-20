import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Matirialicon from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends React.Component{
    render () {
        return (
            <SafeAreaView
                style={{
                    backgroundColor: '#E4E9F2',
                    flex: 1
                }}
            >
        
                <View style={{
                        flexDirection: 'row', 
                        paddingHorizontal: 20, 
                        paddingVertical: 15,
                        backgroundColor: '#fff'
                    }}
                >
                    <TouchableOpacity>
                        <Ionicon name='chevron-back-outline' size={30} color='black' />
                    </TouchableOpacity>
                    <Text style={{
                            alignSelf: 'center', 
                            paddingLeft: 30, 
                            fontSize: 20, 
                            fontWeight: 'bold'
                        }}
                    >My Profile</Text>
                </View>
                <View style={{backgroundColor: '#3D6DFF'}}>
                    <Image 
                        source={require('../../assets/profilepatternbg.png')} 
                        style={{
                            width: Dimensions.get('window').width, 
                            opacity: 0.8
                        }} 
                    />
                </View>

                <View
                    style={{
                        backgroundColor: 'red',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        position: 'absolute',
                        top: 120,
                        alignSelf: 'center',
                        elevation: 11,
                        overflow: 'hidden',
                        // resizeMode: 'contain'
                    }}
                >
                    <Image source={require('../../assets/profileimg.png')} style={{width: 'auto'}} />
                </View>

                <View
                    style={{
                        backgroundColor: '#fff',
                        width: 320,
                        height: 200,
                        borderRadius: 6,
                        position: 'absolute',
                        top: 180,
                        alignSelf: 'center',
                        elevation: 10,
                        zIndex: 2
                    }}
                >
                    <View 
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            paddingVertical: 50,
                            shadowOpacity: 1,
                        }}
                    >
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 6}}>Santosh Kumar</Text>
                        <Text style={{textAlign: 'center', fontSize: 16, paddingBottom: 30, color: '#767391'}}>santoshk123@gmail.com</Text>
                        <TouchableOpacity
                            style={{
                                borderRadius: 5,
                                borderColor: '#3D6DFF',
                                alignItems: 'center',
                                borderWidth: 2,
                                paddingHorizontal: 60,
                                paddingVertical: 10
                            }}
                        >
                            <Text 
                                style={{
                                    color: '#3D6DFF', 
                                    fontWeight: 'bold', 
                                    fontSize: 17
                                }}
                            >Edit My Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View 
                    style={{
                        marginTop: 130,
                        backgroundColor: '#fff',
                        paddingHorizontal: 20,
                        paddingVertical: 20
                    }}
                >
                    <Text
                        style={{
                            // color: '#3D6DFF', 
                            fontWeight: 'bold', 
                            fontSize: 18,
                            paddingBottom: 10
                        }}
                    >Personal Details</Text>
                    <View style={styles.details}>
                        <Maticon name='face' size={30} color='#767391' />
                        <Text 
                            style={{
                                fontSize: 17,
                                paddingLeft: 10
                            }}
                    >Santosh Kumar</Text>
                    </View>
                    <View style={styles.details}>
                        <Maticon name='email' size={30} color='#767391' />
                        <Text 
                            style={{
                                fontSize: 17,
                                paddingLeft: 10
                            }}
                    >santoshk123@gmail.com</Text>
                    </View>
                    <View style={styles.details}>
                        <Maticon name='cellphone-android' size={30} color='#767391' />
                        <Text 
                            style={{
                                fontSize: 17,
                                paddingLeft: 10
                            }}
                    >9334919451</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        backgroundColor: '#fff',
                        marginVertical: 20,
                        marginHorizontal: 40,
                        borderRadius: 10,
                        paddingVertical: 15,
                        alignItems: 'center'
            
                    }}
                >
                    <Matirialicon name='logout' size={30} color='#767391' />
                    <TouchableOpacity>
                        <Text 
                            style={{
                                color: '#3D6DFF',
                                fontWeight: 'bold',
                                fontSize: 18,
                                paddingLeft: 20
                            }}
                        >Logout</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    details: {
        flexDirection: 'row',
        marginBottom: 10
    }
})

