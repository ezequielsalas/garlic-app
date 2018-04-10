import React,{Component} from 'react';

import Header from './Header';


class Home extends Component{

	render(){
		return (
			<React.fragment>
			<Header/>
			<div className='container'>
				<h1>Soy el home</h1>


			</div>
			</React.fragment>

			);
	}
}

export default Home;