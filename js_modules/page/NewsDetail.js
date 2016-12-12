/*
 * Created by xqf on 2016/12/9.
 */
import React,{Component}from 'react';
import {StyleSheet,Text,View,WebView,ToastAndroid,BackAndroid}from 'react-native';
var count=2;
var NewsDetail=React.createClass({

    getDefaultProps(){
      return{

      }
    },
    getInitialState(){
      return{
          detailData:'https://www.baidu.com/'
      }
    },
    render(){
        return(

            <WebView
                style={styles.webView}
                url={this.state.detailData}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true} />

        );

    },
    componentDidMount(){
        //这里测试listview item传过来的数据
        ToastAndroid.show('this.props.rowData docid='+this.props.rowData.docid +"\nthis.props.rowData imgsrc"+this.props.rowData.imgsrc,ToastAndroid.SHORT)
        // console.dir(this.props.title);
        console.log("我是title"+this.props.title);
        console.log("我是rowData"+this.props.rowData);
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
        BackAndroid.addEventListener('hardwareBackPress',function(){
            if(count>=1){
                ToastAndroid.show('收到点击返回键信息...'+count,ToastAndroid.SHORT);
                count--;
                return true;
            }else{
                return false;
            }
        });

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