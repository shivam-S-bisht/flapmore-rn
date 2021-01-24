import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Createnewaccount extends React.Component{

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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity 
                        style={styles.backbuttontouchable}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Icon name='chevron-back' color='black' size={30} />
                    </TouchableOpacity>
                    
                    <Text style={styles.createnewaccounttexttitle}>Create New Account</Text>
                    <Text style={styles.createnewaccounttextcontent}>Create New Account to save trending e-books and podcasts.</Text>
                    <Text style={styles.socialaccounttexttitle}>Sign up via social account</Text>

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
                            
                    </View>
                    
                        <TouchableOpacity 
                            disabled={this.state.touchabledisabled}
                            style={[styles.createnewaccounttouchable, {opacity: this.state.touchabledisabled?0.7:1}]}
                            onPress={()=> {
                                this.props.navigation.navigate('Splash', {
                                    from: 'Createnewaccount', 
                                    to: 'Enterotp', 
                                    emailorphone: this.state.emailorphonevalue, 
                                    password: this.state.passwordvalue
                                })}
                            }
                        >   
                            <Text style={styles.createnewaccounttexttouchable}>Create New Account</Text>
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
        paddingBottom: 30,
        paddingTop: StatusBar.currentHeight
    },

    backbuttontouchable:{
        width: 25,
        height: 30,
        // backgroundColor: 'red',
        marginBottom: 15
    },

    createnewaccounttexttitle: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 8
    },

    createnewaccounttextcontent: {
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
        marginRight: 30,
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

    createnewaccounttouchable: {
        paddingVertical: 18,
        backgroundColor: '#3D6DFF',
        borderRadius: 4
    },

    createnewaccounttexttouchable: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        letterSpacing: 0.7
    }
})