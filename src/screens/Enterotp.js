import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { Content, Item, Input } from 'native-base';
// import { Grid, Col } from 'react-native-easy-grid';
import Ionicon from 'react-native-vector-icons/Ionicons';


export default class Enterotp extends React.Component {

    state = {
        firstinp: '',
        secondinp: '',
        thirdinp: '',
        fourthinp: '',
        fifthinp: '',
        sixthinp: '',
    }

    render() {
        return (
            <SafeAreaView style={styles.topviewable}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Ionicon name='chevron-back-outline' size={30} color='black' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.otptitle}>Login via OTP</Text>
                    <Text style={styles.otpcontent}>Please enter the OTP sent to your  Mobile No. to login</Text>
                    <Text style={styles.inputtitle}>Enter OTP</Text>
                </View>
                <View style={styles.textinputview}>
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        onChangeText={(val) => {
                            this.secondTextinput.focus()
                            this.setState({ firstinp: val })
                        }}
                        style={styles.textinput}
                        placeholder="-"

                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={input => this.secondTextinput = input}
                        onChangeText={(val) => {
                            this.thirdTextinput.focus()
                            this.setState({ secondinp: val })

                        }}
                        style={styles.textinput}
                        placeholder="-"

                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={input => this.thirdTextinput = input}
                        onChangeText={(val) => {
                            this.fourthTextinput.focus()
                            this.setState({ thirdinp: val })
                        }}
                        style={styles.textinput}
                        placeholder="-"

                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={input => this.fourthTextinput = input}
                        style={styles.textinput}
                        onChangeText={(val) => {
                            this.fifthTextinput.focus()
                            this.setState({ fourthinp: val })
                        }}
                        placeholder="-"
                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={input => this.fifthTextinput = input}
                        style={styles.textinput}
                        onChangeText={(val) => {
                            this.sixthTextinput.focus()
                            this.setState({ fifthinp: val })
                        }}
                        placeholder="-"
                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={input => this.sixthTextinput = input}
                        style={styles.textinput}
                        onChangeText={(val) => {
                            this.setState({ sixthinp: val })
                        }}
                        placeholder="-"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => {
                            try {
                                const otp = parseInt(this.state.firstinp + this.state.secondinp + this.state.thirdinp + this.state.fourthinp + this.state.fifthinp + this.state.sixthinp)
                                this.props.navigation.navigate('Splash', {
                                    from: 'Enterotp',
                                    to: 'Tabbars',
                                    emailorphone: this.props.route.params.data.mobile,
                                    otp
                                })

                            }
                            catch {
                                console.log("String recieved...")
                            }
                        }
                        }
                    >
                        <Text style={styles.touchabletext}>Continue</Text>
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

    otptitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 15,

    },

    otpcontent: {
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

    textinputview: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textinput: {
        // width: 65,
        // height: 50,
        borderRadius: 5,
        borderColor: '#BFC4D4',
        borderWidth: 2,
        marginBottom: 20,
        fontSize: 18,
        color: '#626779',
        textAlign: 'center',
        fontWeight: 'bold',
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