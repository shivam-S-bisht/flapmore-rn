import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Touchable } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import Feathericon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';



import Librarytabs from '../components/Librarytabs';


export default class Library extends React.Component {




    state = {
        whichone: 0,
        // libdata: []
    }


    
    componentDidMount() {
        
        // this.props.props.navigation.addListener('focus', () => {
        //     // do something
        //     console.log("++++++++++++++++++++++?>>>>>>>>>>>>>>>>>>>>>>>>")
        // })
        // console.log(this.props.props)
        // console.log(this.props.props.navigation.isFocused())

        this.gettoken().then(res => {
            // console.log("hello")
            if (res.found) {
                this.validatetoken(res.token).then(status => {
                    if (status != 200) {
                        console.log("Token invalid found at Library")
                        this.props.navigation.replace(res.to)
                    }
                })
            } else {
                console.log("Token not found at Library")
                this.props.navigation.replace(res.to)
            }
        })




    }


    async validatetoken(token) {
        // const token = await AsyncStorage.getItem('@token')

        return await axios.get(`/flapmore-user/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        ).then((res) => {
            // const data = res.data;
            // console.log(res, '\n', JSON.stringify(res.data))
            // console.log(res)
            return res.status
            // this.props.navigation.replace(to, {data: res.data, tagname})
            // console.log(typeof(data))
        }).catch(e => console.log(e))
    }

    async gettoken() {

        const token = await AsyncStorage.getItem('@token')
        // console.log(typeof(token))
        try {
            if (token != null) {
                return { found: true, token, to: "LoginSignupchoose" }
            } else {
                return { found: false, to: 'LoginSignupchoose' }
            }
        } catch {
            // console.log(e)
            return { found: false, to: 'LoginSignupchoose' }
        }
    }




    render() {

        // const libdata = this.getalldata()
        // console.log("w+++++++++++++++>>>>>>>>>>>>>>>>", this.props.props)


        return (
            <View style={styles.topviewable}>
                <View style={styles.headerviewable}>
                    <Text style={styles.librarytitle}>Library</Text>
                    <TouchableOpacity>
                        <Feathericon name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.librarytabsviewable}>
                    <View style={[styles.touchabletabviewable, { borderBottomColor: this.state.whichone ? '#fff' : '#3D6DFF' }]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>My contents</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.touchabletabviewable, { borderBottomColor: this.state.whichone ? '#3D6DFF' : '#fff' }]}>
                        <TouchableOpacity
                            style={styles.touchabletab}
                        >
                            <Text style={styles.touchabletabtext}>Favourites</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.flatlistviewable}>
                    <Text>{this.props.libstate}</Text>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={[{ content: 'mycontents' }, { content: 'favourites' }]}
                        renderItem={({ item }) => <Librarytabs tabs={item.content} props={this.props} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').width}
                        onScroll={e => {
                            switch (true) {
                                case e.nativeEvent.contentOffset.x < 170: this.setState({ whichone: 0 }); break;
                                case 170 < e.nativeEvent.contentOffset.x: this.setState({ whichone: 1 }); break;

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
})