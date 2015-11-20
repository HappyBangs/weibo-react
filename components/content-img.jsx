import React from 'react';

class ContentImg extends React.Component{

  render() {
    var imgNodes=this.props['content-img-urls'].map(function(oneImg,index){
      return <li  key={index} ><img src={oneImg} alt="微博配图" /></li>;
    });
    return <div  className="row extra-content clearfix">
      <ul>
        {imgNodes}
      </ul>
    </div>
  }
}
module.exports = ContentImg;
