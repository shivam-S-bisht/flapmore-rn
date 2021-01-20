import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Text, Touchable} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

export default class Forgotpassword extends React.Component{

    state={
        emailphone: ''
    }

    render () {
        return (
            <SafeAreaView style={styles.topviewable}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Ionicon name='chevron-back-outline' size={30} color='black' />
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 5}}>
                    <Text style={styles.titletext}>Forgot Password ?</Text>
                    <Text style={styles.contenttext}>Enter your email id here to get the link to reset your password.</Text>
                    <Text style={styles.inputtitle}>Enter Email / Mobile No.</Text>
                    <TextInput 
                        style={styles.textinput}
                        value={this.state.emailphone}
                        onChangeText={(val)=> this.setState({emailphone: val})}
                    />
                    <TouchableOpacity 
                        style={styles.touchable}
                    >
                        <Text style={styles.touchabletext}>Send Link</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    topviewable: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    titletext: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 15,
        
    },  

    contenttext: {
        fontSize: 16,
        color: '#7F7F97',
        letterSpacing: 0.7,
        paddingBottom: 20
    },  

    inputtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#626779',
        paddingBottom: 10
    },

    textinput: {
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#BFC4D4',
        borderWidth: 2,
        marginBottom: 15
    },

    touchable: {
        backgroundColor: '#3D6DFF',
        paddingVertical: 15,
        borderRadius: 5
    },

    touchabletext: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 0.5
    }
})