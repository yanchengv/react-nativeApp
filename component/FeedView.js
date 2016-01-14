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

var FeedView = React.createClass({
    goBack(){
        this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
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
module.exports = FeedView;