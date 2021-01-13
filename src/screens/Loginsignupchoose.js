import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class LoginSignupchoose extends React.Component{
    render() {
        return (
            <View style={styles.topviewable}>
                <View style={styles.firstviewable}>
                    <View style={[styles.Fviewable, {opacity:0.3, width: 135, height: 45, top:0, left: 0}]}></View>
                    <View style={[styles.Fviewable, {opacity:0.2, width: 90, height: 45, top:45, left: 0}]}></View>
                    <View style={[styles.Fviewable, {opacity:0.1, width: 45, height: 45, top:90, left: 0}]}></View>

                    <Image source={require('../../assets/splash-iconname.png')} style={{marginTop: 30}} />
                    <Text style={{color:'white', marginTop:5, fontSize: 15}}>Flap more for smart contents</Text>
                </View>
                <View style={styles.containedsecondviewable}>
                    <View style={styles.secondsideviewable}></View>
                    <View style={styles.secondmidviewable}></View>
                    <View style={styles.secondsideviewable}></View>
                </View>
                <View style={styles.thirdviewable}>
                    <Text style={styles.loginsignuptext}>Login/Sign up</Text>

                    <TouchableOpacity
                        style={styles.loginsignuptouchable}
                    >
                        <Text style={styles.loginsignuptexttouchable}>Login/Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.createnewaccounttouchable}
                    >
                        <Text style={styles.createnewaccounttexttouchable}>CREATE NEW ACCOUNT</Text>
                    </TouchableOpacity>
                    
                    <Image source={require('../../assets/loginsignupchooseimg.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex:1,
        backgroundColor:'white'
    },

    firstviewable: {
        flex:1.3,
        backgroundColor:'#141E3B',
        alignItems:'center',
        justifyContent:'center'
    },

    Fviewable: {
        position: 'absolute',
        backgroundColor:'white'
    },
    
    containedsecondviewable: {
        height: 'auto',
        flexDirection: 'row',
        backgroundColor: '#141E3B'
    },

    secondsideviewable: {
        backgroundColor:'#141E3B',
        flex: 1,
        height: 30,
        // borderRadius: 20
    },

    secondmidviewable: {
        backgroundColor: 'white',
        flex: 16,
        height: 30,
        borderTopEndRadius: 12,
        borderTopLeftRadius: 12
    },

    thirdviewable: {
        flex: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },

    loginsignuptext: {
        fontSize: 22,
        fontWeight:'bold',
        marginBottom: 40,
    },

    loginsignuptouchable: {
        backgroundColor:'#3D6DFF',
        paddingHorizontal: 98,
        paddingVertical:18,
        marginBottom: 12,
        borderRadius: 5
    },

    createnewaccounttouchable: {
        backgroundColor:'#fff',
        paddingHorizontal: 65,
        borderRadius: 5,
        paddingVertical:16,
        borderWidth: 2,
        borderColor: '#3D6DFF',
        marginBottom: 80
    },

    loginsignuptexttouchable: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    createnewaccounttexttouchable: {
        color: '#3D6DFF',
        fontSize: 16,
        fontWeight: 'bold'
    }

})