'use strict';

import React from 'react';
import {Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SignInPage from './js_modules/page/SignInPage';
//import SimpleNavigationApp from './js_modules/page/SimpleNavigationApp';
//import Navi from './js_modules/page/Navi';
//import JsAndroid from './JsAndroid';
class HelloWorld extends React.Component {
  render() {
    return (
    /*加入导航器功能*/
    <Navigator
                initialRoute={{component: SignInPage}}
                configureScene={() => {
                                    return Navigator.SceneConfigs.PushFromRight;
                                }}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                    }
                }/>
            );

  }
}
class HelloWorld2 extends React.Component {
 constructor(props){
    super(props);
    //console.log(NativeActivity);
  }
// _newNativeActivity(){
//    JsAndroid.jsActivity();
//  }
  render() {
    return (
          <SignInPage/>
            );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);