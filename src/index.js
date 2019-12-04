import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Actionsheet from './sheet'

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
		this.appData = this.appData.bind(this);
	}

	appData(data){

		this.props.sendData(data+ " "+ this.props.tip+"\n")
	}

	onClick = () => {
		const { show } = this.state
		this.setState({show: !show})
	}
   
	onRequestClose = () => {
	  this.onClick()
	}
	onCancel = () =>{

	}
	sheetClick = () => {
		alert('clicked something')
	}
	render() {
	  return (
		<div>
		  <button onClick={this.onClick}>{this.props.tip}</button>
   		  <Actionsheet actionData = {this.appData} show= {this.state.show} menus={this.props.menus} onRequestClose={this.onRequestClose} onClick={this.sheetClick} onCancel={this.onCancel}/>
		</div>
	  )
	}
  }
class Disp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			menus: [{content: 'Little'}, {content: '1'}, {content: '2'}, {content: '3'}, {content: "a lot"}],
			string: "sms:&body=Hey dan! \nI want\n",
			
		}
		this.getData = this.getData.bind(this);
	}
	getData(e){
		const string = this.state.string;
		this.setState({string: string+e});
		alert(string);
	}
	
	render(){
		return(
			<div className="menu">
			<App tip = "Bacon" menus = {this.state.menus} sendData = {this.getData}/>
			<App tip = "Chicken" menus = {this.state.menus} sendData = {this.getData}/>
			<App tip = "Beef" menus = {this.state.menus} sendData = {this.getData}/>
			<App tip = "Parmesan" menus = {this.state.menus} sendData = {this.getData}/>
			<a href={this.state.string}> All done </a>
			</div>
			)
	  }
  }

// ========================================

ReactDOM.render(
  <Disp />,
  document.getElementById('root')
);

