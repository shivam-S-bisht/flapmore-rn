import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import Ionicon from 'react-native-vector-icons/Ionicons';


export default class Loginviaotp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            emailorphonevalue : ''
        }
    }

    

    render() {
        return (
            <SafeAreaView style={styles.topviewable}>
                <ScrollView>
                    <TouchableOpacity
                        style={{alignSelf: 'flex-start', marginLeft: -10}}
                    >
                        <Ionicon name="chevron-back" size={35} color="black" />
                    </TouchableOpacity>
                    <View style={styles.firstviewable}>
                        <Text style={styles.logintexttitle}>Login via OTP</Text>
                        <Text style={styles.logintextcontent}>Login to save your trending ebooks and podcasts.</Text>
                        <View style={styles.textinputviewable}>
                            <Text style={styles.emailtitle}>Enter Email / Mobile No.</Text>
                            <TextInput 
                                style={styles.emailorphonetextinput}
                                placeholder='Mobile or Email'
                                value={this.state.emailorphonevalue}
                                onChangeText={({text})=>{
                                    this.setState({emailorphonevalue:text})
                                }}
                            />
                            <TouchableOpacity
                                style={styles.sendotptouchable}
                            >
                                <Text style={styles.sendotptexttouhable}>Send OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create({
    topviewable: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flex:1
    },

    firstviewable: {
        flex: 1,
        marginTop:10
    },

    logintexttitle: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 8
    },

    logintextcontent: {
        fontSize: 16,
        color: '#4B4B62',
        fontWeight: '800',
        marginBottom: 30,
        letterSpacing: 0.7
    },

    textinputviewable: {
        flex:1
    },

    emailtitle: {
        fontSize: 16,
        color: '#626779',
        fontWeight: '800',
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 0.7
    },

    emailorphonetextinput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        marginBottom: 15,
        borderColor: '#626779',
        borderRadius: 4
    },

    sendotptouchable: {
        paddingVertical: 18,
        backgroundColor: '#3D6DFF',
        borderRadius: 4,
        // marginBottom: 
    },

    sendotptexttouhable: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        letterSpacing: 0.7
    }
})