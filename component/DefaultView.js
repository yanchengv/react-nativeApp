'use strict';
var React = require('react-native');
var {
    View,
    StyleSheet,
    Text
    } = React;

var styles = StyleSheet.create({
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
var DefaultView = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Default view</Text>
            </View>
        )
    }
});
module.exports = DefaultView;