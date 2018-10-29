
import React from 'react'
import Fu from './fujin'
import yimg1 from '../static/1.jpg'
import yimg2 from '../static/2.jpg'
import yimg3 from '../static/3.jpg'
import yimg4 from '../static/4.jpg'


export default class App extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<You/>
				<Fu/>
			</div>
		)
	}
}

class You extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='yan'>
				<h2>找优惠</h2>
				<div className='ycon'>
					<div className='yleft'>
						<img src={yimg2} />
					</div>
					<div className='yright'>
						<div className='ytop'>
							<img src={yimg1} />
						</div>
						<div className='ybtm'>
							<img src={yimg3} />
							<img src={yimg4} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

