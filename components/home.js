import React from 'react';

import banner from '../static/banner.png';
import jt from '../static/jt.png'

export default class Home extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="zfc_header">
					<input type="text"  placeholder="搜索商家、商品名称"/>
				</div>
				<div className="zfc_banner">
					<img src={banner} />
				</div>
				
				
			<ul className="zfc_list clearfix">
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			<li>
				<img src={jt} alt="" />
				<p>不会写啊</p>
			</li>
			</ul>
				
				<div className="zfc_vip clearfix"><span>加入超级会员 - </span><p>每月领20元红包</p><a>立即开通 ></a></div>
				
				
			</div>
		)
	}
}
