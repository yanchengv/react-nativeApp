/**
 * Created by meteor on 1/14/16.
 */

'use strict';
let React = require('react-native');

let {
    View,
    Text,
    StyleSheet
    } = React;

let  Home = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    Home  This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },

});

module.exports = Home;