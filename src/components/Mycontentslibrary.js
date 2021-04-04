import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import Mycontentslibrarycard from './Mycontentslibrarycard';

import mycontentslibrarybooks from '../infos/mycontentslibrarybooks'

export default class Mycontentslibrary extends React.Component {
    render() {

        // console.log("fewoifhewf: ", this.props)


        if (this.props.d.length) {
            return (
                <View style={styles.topviewable}>
                    <ScrollView>
                        <View style={{ backgroundColor: '#D8DDE5', height: 10 }}></View>

                        <View style={styles.fourthviewable}>
                            <FlatList
                                keyExtractor={(_, index) => index.toString()}
                                data={this.props.d}
                                renderItem={({ item }) => <Mycontentslibrarycard contentcard={item} />}
                            // showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </ScrollView>
                </View>
            );

        } else {
            return (
                <View style={[styles.topviewable, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 17 }}>No results to show :/</Text>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        width: Dimensions.get('window').width
    }
})