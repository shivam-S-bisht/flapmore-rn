import React from 'react';
// import { Touchable } from 'react-native';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SoundPlayer from 'react-native-sound-player';
import bookdescription from '../infos/bookdescription';


export default class Navigate extends React.Component {


    // componentDidMount() {
    //     this.playsound()
    // }
    playsound() {
        SoundPlayer.playUrl(bookdescription.playbookuri)
    }


    render () {
        return <View
            style={styles.topviewable}

        >
            <TouchableOpacity
                onPress={()=> {
                    this.playsound()
                    this.props.navigation.navigate('MusicTest')
                }}
            >
                <Text>Player</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles=StyleSheet.create({
    topviewable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})