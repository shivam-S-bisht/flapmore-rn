import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Image, StatusBar} from 'react-native';


export default class Onetag extends React.Component{

    state= {
        foscused: 0
    }
    
    render () {
        
        const {image, name} = this.props.tagdesc;

        return (
            <View style={styles.topviewable}>
                <TouchableOpacity
                    onPress={()=> {
                        if (this.state.foscused) {
                            this.setState({foscused: 0})
                        } else {
                            this.setState({foscused: 1})
                        }
                    }}
                    style={[styles.touchable, {borderColor: this.state.foscused?'#3D6DFF':'#6C808E'}]}
                >
                    <View style={{marginRight: 10}}>
                        <Image source={image} />
                    </View>
                    <View style={{alignSelf: 'center'}}>
                        <Text style={{color: this.state.foscused?'#3D6DFF':'#6C808E', fontWeight: 'bold', fontSize: 15}}>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    topviewable: {
        // flex: 1,
        // paddingTop: StatusBar.currentHeight
        marginRight: 15,

    },

    touchable: {
        flexDirection: 'row',
        borderRadius: 5,
        paddingVertical: 8,
        borderWidth: 2,
        paddingHorizontal: 20,
        marginBottom: 10,
        // marginRight: 
        
    }
})