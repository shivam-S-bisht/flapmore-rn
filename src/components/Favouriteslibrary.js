import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';

import Favouriteslibrarycard from './Favouriteslibrarycard';

import favouriteslibrarybooks from '../infos/favouriteslibrarybooks'

export default class Favouriteslibrary extends React.Component {
    render() {
        
        // console.log("fwefwefwef", this.props)
        return (
            <View style={styles.topviewable}>
                <ScrollView>
                    <View style={{backgroundColor: '#D8DDE5', height: 10}}></View>

                    <View style={styles.fourthviewable}>
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={this.props.d}
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