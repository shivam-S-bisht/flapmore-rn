import React from 'react';
import {View, Animated, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Anticon from 'react-native-vector-icons/AntDesign'

export default class Test extends React.Component {
    

    state = {
        animatedValue: new Animated.Value(-300),
        tovalue: 0,
        filter: 0,
        
        show: 'category',

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




    selectcategory () {
        return (
            <View
                style={{
                    backgroundColor: '#EDF1FF',
                    flex: 1,
                    paddingLeft: 30,
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'category'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'category'?'#3D6DFF':'#EDF1FF'}]}
                    >
                        <Text
                            style={styles.filtertext}
                        >Category</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'language'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'language'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={styles.filtertext}
                        >Language</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'mode'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'mode'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={styles.filtertext}
                        >Mode</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'customer'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'customer'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={styles.filtertext}
                        >Customer Rating</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'author'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'author'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={styles.filtertext}
                        >Author</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> this.setState({show: 'duration'})}
                        style={[styles.filtertouchable, {borderRightWidth: 2, borderColor: this.state.show == 'duration'?'#3D6DFF':'#EDF1FF'}]}

                    >
                        <Text
                            style={styles.filtertext}
                        >Duration</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    onselectcategory () {
        return (
            <View
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingVertical: 10

                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.fiction}
                        onValueChange={newval => this.setState({fiction: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Fiction</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.spiritual}
                        onValueChange={newval => this.setState({spiritual: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Spiritual</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.motivational}
                        onValueChange={newval => this.setState({motivational: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Motivational</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.history}
                        onValueChange={newval => this.setState({history: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >History</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.technology}
                        onValueChange={newval => this.setState({technology: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Technology</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.philosophy}
                        onValueChange={newval => this.setState({philosophy: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Philosophy</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox 
                        disabled={false}
                        value={this.state.biography}
                        onValueChange={newval => this.setState({biography: newval})}
                        onFillColor='#3D6DFF'
        
                    />
                    <Text
                        style={styles.checkboxtext}
                    >Biography</Text>
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
                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>Filter</Text>
                        <TouchableOpacity
                            onPress={()=> {
                                
                            this.onpressfilter(-200)

                            }}
                        >
                            <Anticon name='closecircle' size={25} color='#C8C8C8' />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderColor: '#DDE1F2',
                            borderTopWidth: 2,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row', 
                            justifyContent: 'space-between', 
                            paddingRight: 20,
                           
                        }}
                    >

                        {this.selectcategory()}
                        {this.onselectcategory()}

                        
                    </View>
                    <View
                        style={{
                            borderColor: '#DDE1F2',
                            borderTopWidth: 2,
                            marginBottom: 20,
                            
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 20,

                        }}
                    >
                        <TouchableOpacity 
                            style={styles.startreadingtouchable}
                        >
                            <Text style={styles.startreadingtext}>Apply</Text>
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
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        position: 'absolute',
        height: 400,
        paddingVertical: 20
    },

    firstviewable: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10
        
    },

    startreadingtouchable: {
        backgroundColor:'#3D6DFF', 
        paddingHorizontal:'26%', 
        paddingVertical:15, 
        borderRadius:5
    },

    startreadingtext: {
        color:'white', 
        fontWeight:'bold', 
        fontSize:20,
        textAlign: 'center'
    },

    checkboxtext: {
        fontSize: 17,
        paddingLeft: 6
    },

    filtertext: {
        fontSize: 17,

    },

    filtertouchable: {
        paddingVertical: 8

    }
})