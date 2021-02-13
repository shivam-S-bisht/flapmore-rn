import React from 'react';
import {View, Animated, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Anticon from 'react-native-vector-icons/AntDesign'

export default class Test extends React.Component {
    

    state = {
        animatedValue: new Animated.Value(-300),
        tovalue: 0,
        filter: 0,
        
        fiction:0,
        spiritual:0,
        motivational:0,
        history:0,
        technology:0,
        philosophy:0,
        biography:0,


    }


    onpressfilter (val) {

        // console.log(this.state.filter)
        Animated.timing(this.state.animatedValue, {
            toValue: val,
            duration: 100,
            useNativeDriver: false
        }).start()
    }



    onselectcategory () {
        return (
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.fiction}
                        onValueChange={newval => this.setState({fiction: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Fiction</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.spiritual}
                        onValueChange={newval => this.setState({spiritual: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Spiritual</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.motivational}
                        onValueChange={newval => this.setState({motivational: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Motivational</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.history}
                        onValueChange={newval => this.setState({history: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>History</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.technology}
                        onValueChange={newval => this.setState({technology: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Technology</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.philosophy}
                        onValueChange={newval => this.setState({philosophy: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Philosophy</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.biography}
                        onValueChange={newval => this.setState({biography: newval})}
                        onFillColor='#3D6DFF'
                    />
                    <Text>Biography</Text>
                </View>
            </View>
        )
    }




    

    render () {
        return (
            <SafeAreaView style={styles.topviewable}>
                <TouchableOpacity
                    style={{backgroundColor: 'blue'}}
                    onPress={()=>{

                        this.onpressfilter(0)
                    }}
                >
                    <Text>Filter</Text>
                </TouchableOpacity>
                
                <Animated.View style={[styles.animatedviewable, {bottom: 0}]}>
                    <View style={styles.firstviewable}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Filter</Text>
                        <TouchableOpacity
                            onPress={()=> {
                                
                            this.onpressfilter(-200)

                            }}
                        >
                            <Anticon name='closecircle' size={25} color='#C8C8C8' />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{flexDirection: 'row'}}
                    >
                        <View>
                            <TouchableOpacity>
                                
                            </TouchableOpacity>
                        </View>

                        <View>

                        </View>
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                            <Text>Apply</Text>
                        </TouchableOpacity>
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
        height: 400,
        paddingVertical: 20
    },

    firstviewable: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 20
    }
})