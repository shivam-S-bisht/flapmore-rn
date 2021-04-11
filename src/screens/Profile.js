import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Matirialicon from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends React.Component {


    // coming from slash ....
    state = {
        oldname: null,
        oldemail: null,
        oldphone: null,

        showname: null,
        showmail: null,
        showphone: null,

        textname: null,
        textemail: null,
        textphone: null,

        save: false,

        profileedit: 0
    }



    componentDidMount() {
        // console.log("wefefwefwef++++", Object.values(this.props.route.params.data)[0].first_name)
        this.setState({ showemail: Object.values(this.props.route.params.data)[0].email, showname: Object.values(this.props.route.params.data)[0].first_name })
    }




    async saveprofile() {
        AsyncStorage.getItem('@token').then(token=> {
            axios.post(`/flapmore-user/profile/save`, {
                data: {
                    email: this.state.showmail,
                    first_name: this.state.showname,
                    last_name: null,
                    language: 1
                },

                headers: {
                    'Authorization': `Bearer ${token}`
                },
                
            }
            ).then((res) => {
    
                if (res.status == 200) {
                    // 
                    console.log("Successfully saved")
                } else {
                    // this.props.navigation.replace("LoginSignupchoose")
                    console.log("Unsuccessful saved: ", res.status)
                }
    
            })
        }).catch(()=> {
            // this.props.navigation.replace("LoginSignupchoose")
            console.log("Something went wrong")
        })

    }



    render() {
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
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.goBack()}
                    >
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
                <View style={{ backgroundColor: '#3D6DFF' }}>
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
                    <Image source={require('../../assets/profileimg.png')} style={{ width: 'auto' }} />
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
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 6 }}>{this.state.showname}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, paddingBottom: 30, color: '#767391' }}>{this.state.showemail}</Text>


                        {this.state.profileedit ?
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <TouchableOpacity
                                    style={{
                                        borderRadius: 5,
                                        borderColor: '#3D6DFF',
                                        alignItems: 'center',
                                        borderWidth: 2,
                                        paddingHorizontal: 20,
                                        paddingVertical: 10
                                    }}

                                    onPress={() => {
                                        const textname = this.state.showname;
                                        const textemail = this.state.showemail;
                                        const textphone = this.state.showphone;
                                        this.setState({ profileedit: 0, textname, textemail, textphone })
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#3D6DFF',
                                            fontWeight: 'bold',
                                            fontSize: 17
                                        }}
                                    >Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 5,
                                        borderColor: '#3D6DFF',
                                        alignItems: 'center',
                                        borderWidth: 2,
                                        paddingHorizontal: 20,
                                        paddingVertical: 10
                                    }}

                                    onPress={() => {
                                        const showname = this.state.textname;
                                        const showemail = this.state.textemail;
                                        const showphone = this.state.textphone;
                                        this.setState({ profileedit: 0, showname, showemail, showphone })
                                        this.saveprofile()
                                        // this.setState({ newname: this.state.oldname, newemail: this.state.oldemail, newphone: this.state.oldphone })
                                    }
                                    }
                                >
                                    <Text
                                        style={{
                                            color: '#3D6DFF',
                                            fontWeight: 'bold',
                                            fontSize: 17
                                        }}
                                    >Save</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity
                                style={{
                                    borderRadius: 5,
                                    borderColor: '#3D6DFF',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    paddingHorizontal: 60,
                                    paddingVertical: 10
                                }}

                                onPress={() => {
                                    this.setState({ profileedit: 1 })
                                    // const oldname = this.state.oldname;
                                    // const oldemail = this.state.oldemail;
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
                        }

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

                    {this.state.profileedit ?
                        <View>
                            <View style={styles.details}>
                                <Maticon name='face' size={30} color='#767391' />
                                <TextInput
                                    onChangeText={text => {
                                        this.setState({ textname: text })
                                    }}
                                    value={this.state.textname}
                                    placeholder="Name"
                                    style={{
                                        paddingLeft: 10,
                                        paddingVertical: 2,
                                        fontSize: 17,

                                    }}
                                />
                            </View>
                            <View style={styles.details}>
                                <Maticon name='email' size={30} color='#767391' />

                                <TextInput
                                    onChangeText={text => {
                                        this.setState({ textemail: text })
                                    }}
                                    value={this.state.textemail}
                                    placeholder="Email"
                                    style={{
                                        paddingLeft: 10,
                                        paddingVertical: 2,
                                        fontSize: 17,

                                    }}
                                />
                            </View>
                            <View style={styles.details}>
                                <Maticon name='cellphone-android' size={30} color='#767391' />
                                <TextInput
                                    onChangeText={text => {
                                        this.setState({ textphone: text })
                                    }}
                                    value={this.state.textphone}
                                    placeholder="Phone"
                                    style={{
                                        paddingLeft: 10,
                                        paddingVertical: 2,
                                        fontSize: 17,

                                    }}
                                />
                            </View>
                        </View>
                        :
                        <View>
                            <View style={styles.details}>
                                <Maticon name='face' size={30} color='#767391' />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        paddingLeft: 10
                                    }}
                                >{this.state.showname}</Text>
                            </View>
                            <View style={styles.details}>
                                <Maticon name='email' size={30} color='#767391' />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        paddingLeft: 10
                                    }}
                                >{this.state.showemail}</Text>
                            </View>
                            <View style={styles.details}>
                                <Maticon name='cellphone-android' size={30} color='#767391' />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        paddingLeft: 10
                                    }}
                                >{this.state.showphone}</Text>
                            </View>
                        </View>

                    }
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
                    <TouchableOpacity
                        onPress={() => {
                            console.log(this.props.navigation.replace("splash", { from: "Profile", to: "LoginSignupchoose" }))
                        }}
                    >
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

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    }
})

