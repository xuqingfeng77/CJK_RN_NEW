/*
 * Created by xqf on 2016/12/9.
 */
import React,{Component}from 'react';
import {StyleSheet,Text,View,WebView}from 'react-native';
var NewsDetail=React.createClass({

    getDefaultProps(){
      return{

      }
    },
    getInitialState(){
      return{
          detailData:''
      }
    },
    render(){
        return(
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit} />

        );

    },
    componentDidMount(){
        console.dir(this.props.rowData);
        // var url_api = 'http://c.3g.163.com/nc/article  /' + this.props.rowData.docid + '/full.html';
        //
        // fetch(url_api)
        //     .then((response) => response.json())
        //     .then((responseData)=>{
        //         // 处理拿到的数据
        //         var allData = responseData[this.props.rowData.docid];
        //
        //         console.log(allData);
        //
        //         // 拿到body
        //         var bodyHtml = allData['body'];
        //
        //         // 拿到图片数据
        //         if(allData['img'].length > 0){
        //             // 遍历
        //             for(var i=0; i<allData['img'].length; i++){
        //                 // 取出单个图片对象
        //                 var img = allData['img'][i];
        //                 // 取出src
        //                 var imgSrc = img['src'];
        //                 var  imgHtml = '<img src="' + imgSrc + '" width="100%">';
        //                 // 替换body中的图像占位符
        //                 bodyHtml = bodyHtml.replace(img['ref'], imgHtml);
        //             }
        //         }
        //
        //         // 更新状态机
        //         this.setState({
        //             detailData:bodyHtml
        //         });
        //
        //     })
        //     .catch((error) => {
        //         alert('请求数据失败');
        //     })


    }



});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});


module.exports=NewsDetail;