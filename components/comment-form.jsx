import React from 'react';

class CommentForm extends React.Component{
  render() {
    var imgUrl=this.props['data-my-head-img'];
    return <div className="row comment-form clearfix" >
          <div className="ow-left">
              <img src={imgUrl} alt="头像" className="little-head" />
          </div>
          <div className="ow-right" >
            <textarea name="name" rows="8" cols="40" className="comment-box"></textarea>
            <input className="comment-btn" type="submit" value="评论"/>
          </div>
    </div>;
  }
}
module.exports = CommentForm;
