'use strict';

var React = require('react-native');
var DefaultView = require('./component/DefaultView');
let FeedView = require('./component/FeedView');
let Home = require('./Home');
var {
    AppRegistry,
    View,
    Navigator,
    Text,
    BackAndroid,
    StyleSheet
    } = React;


var SampleApp = React.createClass({

    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene(router, navigator){
        var Component = null;

        this._navigator = navigator;
        switch(router.name){
            case "home":
                Component = Home;
                break;
            case "feed":
                Component = FeedView;
                break;
            default: //default view
                Component = DefaultView;
        }

        return <Component navigator={navigator} />
    },

    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },


    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    },

    render() {
        return (
            <Navigator
                initialRoute={{name: 'home'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

});



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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => SampleApp);

