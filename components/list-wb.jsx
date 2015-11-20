import React from 'react';
import OneWB from  './one-wb.jsx';//标签的名字根据这个变量名来决定

class ListWB extends React.Component{
  render() {
    // 遍历后端给的数据，并且插入
    var oneWBNodes = this.props.data.map(function(aWB,index){
      return <OneWB oneData={aWB} key={index}></OneWB>;
    });
    return <div>
        {oneWBNodes}
    	</div>;
  }
}
module.exports = ListWB;
