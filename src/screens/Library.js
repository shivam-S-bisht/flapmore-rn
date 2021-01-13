import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Touchable} from 'react-native';
import { Feather } from '@expo/vector-icons';


import Librarytabs from '../components/Librarytabs';


export default class Library extends React.Component{

    state={
        whichone: 0
    }

    render() {
        return(
            <View style={styles.topviewable}>
                <View style={styles.headerviewable}>
                    <Text style={styles.librarytitle}>Library</Text>
                    <TouchableOpacity>
                        <Feather name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.librarytabsviewable}>
                    <View style={[styles.touchabletabviewable, {borderBottomColor:this.state.whichone?'#fff':'#3D6DFF'}]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>My contents</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.touchabletabviewable, {borderBottomColor:this.state.whichone?'#3D6DFF':'#fff'}]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>Favourites</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.flatlistviewable}>
                    <FlatList 
                            keyExtractor = {(item)=>item.id}
                            data = {[{id: 0, content: 'mycontents'}, {id: 1, content: 'favourites'}]}
                            renderItem = {({item})=> <Librarytabs tabs={item.content} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={'fast'}
                            snapToInterval={Dimensions.get('window').width}
                            onScroll={e=> {
                                switch(true){
                                    case e.nativeEvent.contentOffset.x<170: this.setState({whichone: 0}); break;
                                    case 170<e.nativeEvent.contentOffset.x: this.setState({whichone: 1}); break;
                                    
                                }      
                                // console.log(e.nativeEvent.contentOffset.x)
                            }}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    topviewable: {
        flex: 1,
        backgroundColor: '#fff'
    },

    headerviewable: {
        // flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10
    },

    librarytitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    librarytabsviewable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red'
    },

    touchabletabviewable: {
        // backgroundColor: 'blue', 
        width: '30%',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: 5
    },

    touchabletabtext: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 

    flatlistviewable: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red'
    }
})