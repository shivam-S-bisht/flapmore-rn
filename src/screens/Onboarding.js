import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, FlatList, Dimensions} from 'react-native';


import Onboard from '../components/Onboard'
import boards from '../components/boards';


export default class Onboarding extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            whichone: 0
        }
    }



    render () {
        return (
            <View style={styles.topviewable}>
                <View style={{flex:10}}>
                    <FlatList 
                        keyExtractor = {(item)=>item.id}
                        data = {boards}
                        renderItem = {({item})=> <Onboard board={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').width}
                        onScroll={e=> {
                            switch(true){
                                case e.nativeEvent.contentOffset.x<400: this.setState({whichone: 0}); break;
                                case e.nativeEvent.contentOffset.x<800 && 400<e.nativeEvent.contentOffset.x: this.setState({whichone: 1}); break;
                                case e.nativeEvent.contentOffset.x<1200 && 800<e.nativeEvent.contentOffset.x: this.setState({whichone: 2}); break;
                                case 1200<e.nativeEvent.contentOffset.x: this.setState({whichone: 3});
                            }      
                        }}
                    />
                </View>
                <View style={styles.viewableslider}>
                    <View style={[styles.cour, {backgroundColor:this.state.whichone==0?'#3D6DFF':'#9bccf6'}]}></View>
                    <View style={[styles.cour, {backgroundColor:this.state.whichone==1?'#3D6DFF':'#9bccf6'}]}></View>
                    <View style={[styles.cour, {backgroundColor:this.state.whichone==2?'#3D6DFF':'#9bccf6'}]}></View>
                    <View style={[styles.cour, {backgroundColor:this.state.whichone==3?'#3D6DFF':'#9bccf6'}]}></View>
                </View>
                <View style={styles.viewablestartreadingtouchable}>
                    <TouchableOpacity style={styles.startreadingtouchable}>
                        <Text style={styles.startreadingtext}>Start Reading</Text>
                    </TouchableOpacity>
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

    cour: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginHorizontal:8
    },

    startreadingtouchable: {
        backgroundColor:'#3D6DFF', 
        paddingHorizontal:'26%', 
        paddingVertical:20, 
        borderRadius:5
    },

    startreadingtext: {
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },

    viewableslider: {
        flex:1, 
        flexDirection:'row', 
        justifyContent:'center'
    },

    viewablestartreadingtouchable: {
        flex:2, 
        alignItems:'center', 
        justifyContent:'center'
    }
})