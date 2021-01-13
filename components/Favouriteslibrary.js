import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';

import Favouriteslibrarycard from '../components/Favouriteslibrarycard';

import favouriteslibrarybooks from '../components/favouriteslibrarybooks'

export default class Favouriteslibrary extends React.Component {
    render() {
        return (
            <View style={styles.topviewable}>
                <ScrollView>
                    <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

                    <View style={styles.fourthviewable}>
                        <FlatList
                            keyExtractor={item=>item.id}
                            data={favouriteslibrarybooks}
                            renderItem={({item}) => <Favouriteslibrarycard favcard={item} />}
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