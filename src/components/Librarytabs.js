import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

import Favouriteslibrary from '../components/Favouriteslibrary';
import  Mycontentslibrary from '../components/Mycontentslibrary';

export default class Librarytabs extends React.Component {

    tabname = this.props.tabs;

    render() {
        if (this.tabname == 'mycontents') {
            return (
                <Mycontentslibrary />
            )
        } else if (this.tabname == 'favourites') {
            return (
                <Favouriteslibrary />
            )
        }
    }
}