import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Touchable} from 'react-native';
import SoundPlayer from 'react-native-sound-player';


export default class Musicplayer extends React.Component{

    

    playbook () {
        try{
            console.log('hello')

            SoundPlayer.playUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
            console.log('hello')
        } catch (e) {
            console.log(`error : ${e}`)
        }
    }


    pausebook () {
        try {
            SoundPlayer.pause()
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
    }

    resumebook () {
        try {
            SoundPlayer.resume()
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
    }

    async getinfo () {

        try {
            const info = await SoundPlayer.getInfo()
            console.log(info)
        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
        
    }


    render () {
        return (
            <View
                style={styles.topviewable}
            >
                <Text>Music player</Text>

                <TouchableOpacity
                    onPress={this.playbook}
                >
                    <Text>Play</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.pausebook}
                >
                    <Text>Pause</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.resumebook}
                >
                    <Text>Resume</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.getinfo}
                >
                    <Text>Info</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create ({
    topviewable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})