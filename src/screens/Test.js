import React from 'react';
import {View, Animated, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Anticon from 'react-native-vector-icons/AntDesign'

export default class Test extends React.Component {
    

    state={
        animatedValue: new Animated.Value(-200),
        tovalue: 0,
        filter: 0,
        
        inprogress: 0,
        completed: 0,
        wishlist: 0
    }


    onpressfilter () {

        Animated.timing(this.state.animatedValue, {
            toValue: this.state.filter?0:-200,
            duration: 100,
            useNativeDriver: false
        }).start()
    }


    checkbox=[{name: 'inprogress', value: 0}]

    

    render () {
        return (
            <SafeAreaView style={styles.topviewable}>
                <TouchableOpacity
                    style={{backgroundColor: 'blue'}}
                    onPress={()=>{
                        switch(this.state.filter) {
                            case 0: this.setState({filter: 1}); break;
                            case 1: this.setState({filter: 0}); break;
                        }
                        this.onpressfilter()
                    }}
                >
                    <Text>Filter</Text>
                </TouchableOpacity>
                
                <Animated.View style={[styles.animatedviewable, {bottom: 0}]}>
                    <View style={styles.firstviewable}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Filter</Text>
                        <TouchableOpacity>
                            <Anticon name='closecircle' size={25} color='#C8C8C8' />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox 
                            disabled={false}
                            value={this.state.inprogress}
                            onValueChange={newval=>this.setState({inprogress: newval})}
                            onFillColor='#3D6DFF'
                        />
                        <Text style={{alignSelf: 'center', fontSize: 17}}>inprogress</Text>
                    </View>
                    
                    
                </Animated.View>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    animatedviewable: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
        position: 'absolute',
        paddingHorizontal: 20,
        height: 200,
        paddingVertical: 20
    },

    firstviewable: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 20
    }
})