import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicon from 'react-native-vector-icons/Ionicons';


export default class Login extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            emailorphonevalue: '',
            passwordvalue:'',
            hidepassword:true,
            touchabledisabled: true
        }
    }




    checkAllTextFilled() {
        if (this.state.emailorphonevalue.length && this.state.passwordvalue.length) {
            this.setState({touchabledisabled: false})
        }
        else {
            this.setState({touchabledisabled: true})
        }
    }

    render() {
        return (
            
            <SafeAreaView style={styles.topviewable}>
                <ScrollView>
                    <TouchableOpacity 
                        style={styles.backbuttontouchable}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Ionicon name="chevron-back" size={35} color="black" />
                    </TouchableOpacity>
                    
                    <Text style={styles.logintexttitle}>Login</Text>
                    <Text style={styles.logintextcontent}>Real Flapsters read more than just the first chapter. Signup for the superpower.</Text>
                    <Text style={styles.socialaccounttexttitle}>Login via social account</Text>

                    <View style={styles.socialsignupviewable}>
                        <TouchableOpacity style={[styles.socialtouchable, {borderColor: '#3D6DFF'}]}>
                            <Image source={require('../../assets/fblogo.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialtouchable, {borderColor: '#F0604B'}]}>
                            <Image source={require('../../assets/googlelogo.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialtouchable, {borderColor: '#50ABF1'}]}>
                            <Image source={require('../../assets/twitterlogo.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ortext}>OR</Text>
                    <View>
                        <Text style={styles.textinputtitle}>Enter Email / Mobile No.</Text>
                        <TextInput 
                            style={styles.emailphonetextinput}
                            onChangeText={text=>{
                                this.setState({emailorphonevalue: text})
                                this.checkAllTextFilled()
                            }}
                            value={this.state.emailorphonevalue}
                            placeholder='enter your email'
                        />
                        <Text style={styles.textinputtitle}>Password</Text>
                            <TextInput 
                                style={styles.passwordtextinput}
                                onChangeText={text=>{
                                    this.setState({passwordvalue: text})
                                    this.checkAllTextFilled()
                                }}
                                value={this.state.passwordvalue}
                                placeholder='enter your password'
                                secureTextEntry={this.state.hidepassword}
                            />
                            <TouchableOpacity style={{marginTop: -10, marginBottom: 15, alignSelf: 'flex-end'}}>

                                <Text style={{color: '#3D6DFF', fontWeight: 'bold'}} >Forgot Password ?</Text>
                            </TouchableOpacity>
                            
                    </View>
                    
                        <TouchableOpacity 
                            disabled={this.state.touchabledisabled}
                            style={[styles.logintouchable, {opacity: this.state.touchabledisabled?0.7:1}]}
                            onPress={()=> {
                                this.props.navigation.replace('Splash', {
                                    from: 'Login', 
                                    to: 'Tabbars', 
                                    emailorphone: this.state.emailorphonevalue, 
                                    password: this.state.passwordvalue
                                })}
                            }
                        >
                            <Text style={styles.logintexttouchable}>Login</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.loginviaotptouchable}
                        >
                            <Text style={styles.loginviaotptexttouchable}>Login via OTP</Text>
                        </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    backbuttontouchable:{
        width: 25,
        height: 30,
        // backgroundColor: 'red',
        // marginBottom
    },

    logintexttitle: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 8
    },

    logintextcontent: {
        fontSize: 16,
        color: '#4B4B62',
        // fontWeight: '800',
        marginBottom: 10,
        letterSpacing: 0.7
    },
    
    socialaccounttexttitle: {
        fontSize: 19,
        marginBottom: 15,
        letterSpacing: 1
    },

    socialtouchable: {
        padding: 17,
        // backgroundColor: 'red',
        borderRadius: 33,
        marginRight: 20,
        borderWidth: 3,
        marginBottom: 15
    },

    ortext: {
        fontSize: 19,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: '#7F7F97',
        marginBottom: 15
    },

    socialsignupviewable: {
        height: 'auto',
        flexDirection: 'row'
    },

    textinputtitle: {
        fontSize: 16,
        color: '#626779',
        fontWeight: '800',
        marginBottom: 5,
        fontWeight: 'bold',
        letterSpacing: 0.7
    },

    emailphonetextinput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        marginBottom: 10,
        borderColor: '#626779',
        borderRadius: 4
    },

    passwordviewable: {
        flexDirection: 'row'
    },

    passwordtextinput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        marginBottom: 15,
        borderColor: '#626779',
        borderRadius: 4
    },

    logintouchable: {
        paddingVertical: 18,
        backgroundColor: '#3D6DFF',
        borderRadius: 4,
        marginBottom: 15
    },

    logintexttouchable: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        letterSpacing: 0.7
    },

    loginviaotptouchable: {
        paddingVertical: 18,
        // backgroundColor: '#3D6DFF',
        borderRadius: 4,
        borderColor: '#3D6DFF',
        borderWidth: 2
    },

    loginviaotptexttouchable: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3D6DFF',
        letterSpacing: 0.7
    }
})

