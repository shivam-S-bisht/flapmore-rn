import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';

import Mycontentslibrarycard from './Mycontentslibrarycard';

import mycontentslibrarybooks from '../infos/mycontentslibrarybooks'

export default class Mycontentslibrary extends React.Component {
    render() {

        // console.log(this.props.d)

        return (
            <View style={styles.topviewable}>
                <ScrollView>
                    <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

                    <View style={styles.fourthviewable}>
                        <FlatList
                            keyExtractor={item=>item.id}
                            data={mycontentslibrarybooks}
                            renderItem={({item}) => <Mycontentslibrarycard contentcard={item} />}
                            // showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex:1, 
        width: Dimensions.get('window').width
    }
})