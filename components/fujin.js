import yimg from '../static/5.jpg'
import yimg5 from '../static/6.jpg'
import yimg6 from '../static/7.jpg'
import yimg7 from '../static/8.jpg'

import React from 'react'

export default class Fu extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<h2 className='ytit'>附近买过<span>共3家<img src={yimg} /></span></h2>
				<div className='yconn'>
					<div>
						<img src={yimg5} />
						<span>每一天便利</span>
					</div>
					<div>
						<img src={yimg6} />
						<span>每一天便利</span>
					</div>
					<div>
						<img src={yimg7} />
						<span>每一天便利</span>
					</div>
				</div>
			</div>
		)
	}
}
