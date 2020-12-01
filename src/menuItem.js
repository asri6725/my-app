import React from 'react';
import Actionsheet from './sheet';
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
		this.appData = this.appData.bind(this);
	}

	appData(data){

		this.props.sendData(data, this.props.tip)
	}

	onClick = () => {
		const { show } = this.state
		this.setState({show: !show})
	}
   
	onRequestClose = () => {
	  this.onClick()
	}
	
	render() {
		const show = this.state.show;
		  let action;
		  if (show) {
			  action = <Actionsheet actionData = {this.appData} show= {this.state.show} menus={this.props.menus} onRequestClose={this.onRequestClose}/>
		  } else {
			  action = <a />
		  }
	  return (
		  
		<div className = "items">
		  <div className = "item" onClick={this.onClick}>{this.props.tip}</div>
		  	{action}
			</div>
	  )
	}
  }

  export default App