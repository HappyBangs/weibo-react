import React from 'react';
import ReactDOM from 'react-dom';
import ListWB from  './components/list-wb.jsx';//微博列表组件

//微博数据
var dataList=[
	{
		myUrl:"./img/me.png",
		headUrl:'./img/lufei.png',
		nickName:'飞飞',
		content:'拿快递拿快递5号小邮局爆仓啦',
		NoCollect:13, //收藏数
		NoForward:20,//转发数
		NoComment:14,//评论数
		NoPointGreat:42// 点赞数
	},
	{
		myUrl:"./img/me.png",
		headUrl:'./img/nami.png',
		nickName:'娜美',
		content:'拿快递拿快递篮球场爆仓啦',
		NoCollect:12,
		NoForward:2,
		NoComment:12,
		NoPointGreat:23,
		contentImgUrls:["./img/1.png",
		"./img/2.png",
		]
	},
	{
		myUrl:"./img/me.png",
		headUrl:'./img/fengfegn.png',
		nickName:'峰峰',
		content:'拿快递拿快递快递怎么还没来',
		NoCollect:1321,
		NoForward:2012,
		NoComment:6,
		NoPointGreat:22423
	},
	{
		myUrl:"./img/me.png",
		headUrl:'./img/ruobin.png',
		nickName:'Robin',
		content:'拿快递拿快递3号小邮局爆仓啦',
		NoCollect:132,
		NoForward:202,
		NoComment:142,
		NoPointGreat:423,
		contentImgUrls:["./img/3.png",
		"./img/4.png",
		"./img/5.png",
		"./img/6.png",
		"./img/7.png",
		"./img/8.png",
		"./img/9.png",
		"./img/10.png"]
	},
	{
		myUrl:"./img/me.png",
		headUrl:'./img/zuoluo.png',
		nickName:'佐罗',
		content:'拿快递拿快递1号小邮局爆仓啦',
		NoCollect:132,
		NoForward:202,
		NoComment:142,
		NoPointGreat:423,
		contentImgUrls:["http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg",
		"http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg",
		"http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg",
		"http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg",
		"http://img1.gtimg.com/tech/pics/hv1/238/85/1736/112905313.jpg"]
	},
];

ReactDOM.render(<ListWB data={dataList} />,
  document.getElementById('place')
);
