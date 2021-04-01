import React from 'react';
import { StyleSheet, Dimensions, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/Ionicons';

class Pdfview extends React.Component {

  state = {
    lastpage: 1,
    currpage: this.props.route.params.currpage,
    totalpages: 1
  }

  render() {
    {console.log(this.props.route.params.currpage)}
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };


    return (
      <View style={styles.topviewable}>

        <View style={styles.firstviewable}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="chevron-back-sharp" size={30} color="#151522" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="headset-outline" size={30} color="#151522" />
          </TouchableOpacity>
        </View>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, _) => {
            this.setState({ totalpages: numberOfPages })
          }}
          onPageChanged={(page, _) => {
            this.setState({ currpage: page })
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`)
          }}
          page={this.state.currpage}
          enablePaging={true}
          horizontal={true}
          fitWidth={true}
          style={styles.pdf}
        // activityIndicator={}
        />

        <View style={styles.sliderviewable}>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}><Text style={styles.currpagetext}>{this.state.currpage}</Text></View>
          <Slider
            style={{ width: Dimensions.get('window').width }}
            minimumValue={1}
            maximumValue={this.state.totalpages}
            minimumTrackTintColor="#3D6DFF"
            maximumTrackTintColor="#3D6DFF"
            value={this.state.currpage}
            onValueChange={(value) => this.setState({ currpage: value })}
            // disabled={true}
            // thumbImage={()=><Icon name="question-circle" size={30} color="#900" />}
            step={1}
            thumbTintColor={'#3D6DFF'}

          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  topviewable: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff'
  },

  firstviewable: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },

  currpagetext: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#3D6DFF',
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 3,
    color: '#fff'
  },

  sliderviewable: {
    marginVertical: 10
  }
});

export default Pdfview;