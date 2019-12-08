import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Actionsheet from './sheet';
import send from './send.png';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
		this.appData = this.appData.bind(this);
	}

	appData(data){

		this.props.sendData(data+ " "+ this.props.tip+", "+"\n")
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
class Disp extends React.Component{
	
	getData(e){
		const display = this.state.display;
		this.setState({display: display+e});
		const string = this.state.string;
		this.setState({string: string+e});
	}

	
	render(){
		return(
			<div className = "Wrapper">
				<div className="menu">
					<div className = "meat">
						<h3> Meat </h3></div>
					<div className="list1">
						{
							this.state.meat.map((meat, i) => {
							return (
								<App tip = {meat} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
						
						</div>
					<div className="cheese">
						<h3> Cheese </h3></div>
						<div className="list2">
						{
							this.state.cheese.map((cheese, i) => {
							return (
								<App tip = {cheese} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
					 </div>
					 <div className="veg">
						 <h3> Vegetables </h3></div>
						<div className="list3">
						{
							this.state.veg.map((veg, i) => {
							return (
								<App tip = {veg} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
						
					 </div>
					 <div className="leaves">
						 <h3> Leaves </h3></div>
						 <div className="list4">
						{
							this.state.leaves.map((leaves, i) => {
							return (
								<App tip = {leaves} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
						
					 </div>
					 <div className="frozen">
						 <h3> Frozen Food </h3></div>
						 <div className="list5">
						{
							this.state.frozen.map((frozen, i) => {
							return (
								<App tip = {frozen} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
						
					 </div>
					 <div className="sauce">
						 <h3> Sauces </h3>
						 </div>
						 <div className= "list6">
						{
							this.state.sauce.map((sauce, i) => {
							return (
								<App tip = {sauce} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
					 </div>
					 <div className="extra">
						 <h3> Extras </h3>
						 </div>
						 <div className = "list7">
						{
							this.state.extra.map((extra, i) => {
							return (
								<App tip = {extra} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
					 </div>
					 <div className="drinks">
						 <h3> Drinks </h3>
						 </div>
						 <div className="list8">
						{
							this.state.drinks.map((drinks, i) => {
							return (
								<App tip = {drinks} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
					</div>
					 <div className="icecream">
						 <h3> Ice Creams </h3> </div>
						 <div className="list9">
						{
							this.state.icecream.map((icecream, i) => {
							return (
								<App tip = {icecream} menus={this.state.menus} sendData={this.getData} />
							)
							})
						}
					 </div>
				</div>
				<div className="submit">
					<div className = "send">
						<a href={this.state.string}>
							<img className = "send" src = {send} />
						</a>
					</div>
					<div className="String">
						<a> {this.state.display} </a>
					</div>
				</div>
		</div>
		)
	  }

	  constructor(props){
		super(props);
		this.state = {
			menus: [{content: 'some'}, {content: '1'}, {content: '2'}, {content: '3'}, {content: "a lot of"}],
			string: "sms:?&body=Hey dan! \nI want \n",
			display: "Hey dan! \r\nI want\r\n",
			meat: [
				"bacon",
				"chicken",
				"chorizo",
				"ham" ,
				"pepperoni",
				"proscuitto",
				"salami",
				"wings",
			],
			cheese:[
				"blue",
				"bocconchini",
				"fetta",
				"goat",
				"mozarella",
				"notzarella",
				"parmesan",
				"sour cream",
				"swiss",
				"whip cream",
			],
			veg:[
				"basil",
				"caram onion",
				"cherry tom",
				"corn",
				"cucumber",
				"eggplant",
				"fennel",
				"green cap", 
				"kale", 
				"mint",
				"mushroom",
				"parsley",
				"portobello",
				"potato",
				"pumpkin",
				"red cabbage",
				"Roma tom",
				"spanish onion",
				"strawberry",
				"zucchnini",
			],
			leaves:[
				"mixed leaves",
				"rocket",
				"spinach",
			],
			frozen:[
				"buff mozz",
				"cauliflower",
				"cheese sticks",
				"chilli marinade",
				"curry sauce",
				"fajita",
				"falafel",
				"gluten free",
				"lamb",
				"maple",
				"polenta",
				"pork",
				"prawns",
				"relish",
				"steak",
			],
			sauce:[
				"3C", 
				"aioli",
				"bal glaze",
				"balsamic",
				"bbq",
				"cream sauce",
				"dijon mustard",
				"garlic",
				"herb vin",
				"hot sauce",
				"mustard sauc",
				"nutella",
				"olive oil",
				"peri",
				"pesto",
				"ranch",
				"smoke",
				"tapenade",
				"truffle",
				"wing glaze",
			],
			extra:[
				"baking paper",
				"bin bags",
				"capers",
				"chilli flakes",
				"cling wrap",
				"cream potts",
				"dip container",
				"dip lods",
				"floor cleaner",
				"flour",
				"gloves lg",
				"gloves md",
				"grease proof pap",
				"green deterg",
				"green olives",
				"jalapenos",
				"M spice",
				"nutmeg",
				"olive oil",
				"olives",
				"oregano",
				"paper towl",
				"pickels",
				"pine nuts",
				"piza box xlg",
				"pizza box lg",
				"pizza box md",
				"pizza box sm",
				"roast cap",
				"salad bowls",
				"salt",
				"semi dried tom",
				"snack box",
				"sponge",
				"steel scourer",
				"sugar",
				"tom sauce",
				"veg oil",
				"walnuts",
				"wipes",
			],
			drinks:[
				"coke",
				"coke zero",
				"sprite",
				"sunkist",
				"lemonade",
				"sparkling water",
			],
			icecream: [
				"s caramel 500",
				"hokey 500",
				"choc 500",
				"lamington 500",
				"pavlova 500",
				"s caramel 130",
				"hokey 130",
				"choc 130",
				"lamington 130",
				"pavlova 130",
			],	
		}
		this.getData = this.getData.bind(this);
	}
  }

// ========================================

ReactDOM.render(
  <Disp />,
  document.getElementById('root')
);

