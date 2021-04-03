import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

import Favouriteslibrary from './Favouriteslibrary';
import  Mycontentslibrary from './Mycontentslibrary';

export default class Librarytabs extends React.Component {

    tabname = this.props.tabs;

    // componentDidMount () {

    // }

    render() {
        // console.log(this.props.d)
        if (this.tabname == 'mycontents') {
            return (
                <Mycontentslibrary d={this.props.d} />
            )
        } else if (this.tabname == 'favourites') {
            return (
                <Favouriteslibrary d={this.props.d} />
            )
        }
    }
}