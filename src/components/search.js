import React , { Component} from 'react'

import RateStars from './rateStars.js'
class Search extends Component{

	constructor(){
		super()
	}
	render(){
		return (
	<div>		
		<h1> hello </h1>

		<div className="input-group md-form form-sm form-2 pl-0">
			  <input 
				  className="form-control my-0 py-1 amber-border" 
				  type="text" 
				  placeholder="Search" 
				  aria-label="Search" 
				  onChange={(e)=>this.props.search(e.target.value)}
			  />
			  <div className="input-group-append">
			  <span 
			  		className="input-group-text amber lighten-3" 
			  		id="basic-text1"
			  	>
				  	
		<RateStars 
			handelStars={this.props.handelRate}
			rate={this.props.rate} />
        		</span>
 		</div>
		</div>
</div>
			)
	}



}
export default Search;