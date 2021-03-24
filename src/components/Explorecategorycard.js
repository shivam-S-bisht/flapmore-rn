import React from 'react';
import {View, Image, StyleSheet ,Text, TouchableOpacity} from 'react-native';

export default class ExploreCategoryCard extends React.Component{
    render() {
        
        const {icon, title} = this.props.explorecard;

        return(
            <View style={styles.topviewable}>
                <TouchableOpacity
                    style={styles.explorecardtouchable}
                    // onPress={this.props.props.navigation.navigate('BookDescription')}
                    onPress={() => this.props.props.props.navigation.push('Splash', {to: 'Tagscreen', from: 'Tabbars', tagname: {title}})}

                >
                    <Image source={icon} style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5, marginRight: 10}} />                
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#1F4966'}}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red'
    },

    explorecardtouchable: {
        backgroundColor: '#DFE5F4',
        paddingHorizontal: 18,
        flexDirection: 'row',
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 15
    }
})