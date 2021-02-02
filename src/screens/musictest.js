import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

import bookdescription from '../infos/bookdescription';

export default class MusicTest extends React.Component {

    playsound() {
        SoundPlayer.playUrl(bookdescription.playbookuri)
    }

    resumesound() {
        SoundPlayer.resume()

    }


    pausesound() {
        SoundPlayer.pause()

    }

    async getinfo () {
        const info = await SoundPlayer.getInfo()
        console.log(info)
    }


    seek() {
        SoundPlayer.seek(430)
    }

    // componentWillUnmount () {
    //     SoundPlayer.stop()
    // }



    render () {
        return <View
            style={styles.topviewable}
        >
            <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('Navigate')}
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> this.playsound()}
            >
                <Text>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> this.pausesound()}
            >
                <Text>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> this.resumesound()}
            >
                <Text>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> this.seek()}
            >
                <Text>Seek</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> this.getinfo()}
            >
                <Text>Info</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    topviewable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})